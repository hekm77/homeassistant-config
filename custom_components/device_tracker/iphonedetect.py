import logging
import subprocess
import sys
from datetime import timedelta
import socket

import voluptuous as vol

from homeassistant.components.device_tracker import (
    PLATFORM_SCHEMA, DEFAULT_SCAN_INTERVAL, SOURCE_TYPE_ROUTER)
from homeassistant.helpers.event import track_point_in_utc_time
from homeassistant import util
from homeassistant import const
import homeassistant.helpers.config_validation as cv

DEPENDENCIES = []

_LOGGER = logging.getLogger(__name__)

PLATFORM_SCHEMA = PLATFORM_SCHEMA.extend({
    vol.Required(const.CONF_HOSTS): {cv.string: cv.string},
})

class Host:
    """Host object with arp detection."""

    def __init__(self, ip_address, dev_id, hass, config):
        """Initialize the Host."""
        self.hass = hass
        self.ip_address = ip_address
        self.dev_id = dev_id

    def detectiphone(self):
        """Send udp message to port 5353
           and return True if an arp chache entry is made success.
        """
        aSocket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        aSocket.settimeout(1)
        addr = (self.ip_address, 5353)
        message = b'Steve Jobs'
        aSocket.sendto(message, addr)

        try:
            output = subprocess.check_output('arp -na', shell=True)
            output = output.decode('utf-8').split('\n')
            for entry in output:
                mac = entry.split(' ')
                if mac[0] != '':
                    rcvd_ip = mac[1]
                    rcvd_ip = rcvd_ip[:-1]  # remove last Klammer
                    rcvd_ip = rcvd_ip[1:]  # remove first Klammer
                    mac = mac[3]
                    mac = mac.split(':')
                    if rcvd_ip == self.ip_address:
                        if len(mac) == 6:
                            return True
        except subprocess.CalledProcessError:
            return False
        return False

    def update(self, see):
        """Update device state."""
        if self.detectiphone():
            see(dev_id=self.dev_id, source_type=SOURCE_TYPE_ROUTER)
            return True
        _LOGGER.debug("iPhone on ip=%s not present", self.ip_address)

def setup_scanner(hass, config, see, discovery_info=None):
    """Setup the Host objects and return the update function."""
    hosts = [Host(ip, dev_id, hass, config) for (dev_id, ip) in
             config[const.CONF_HOSTS].items()]
    interval = DEFAULT_SCAN_INTERVAL
    _LOGGER.info("Started iphonedetect with interval=%s on hosts: %s",
                 interval, ",".join([host.ip_address for host in hosts]))

    def update(now):
        """Update all the hosts on every interval time."""
        for host in hosts:
            host.update(see)
        track_point_in_utc_time(hass, update, now + interval)
        return True

    return update(util.dt.utcnow())

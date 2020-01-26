# Home Assistant Configuration

[![Donate](https://img.shields.io/badge/Donate-PayPal-blue.svg)](https://www.paypal.me/ChikiPiki)

[Home Assistant](https://home-assistant.io/) is installed in [Docker](https://www.docker.com) on [Raspberry Pi 3B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) (Raspbian Buster)
## Devices and services
* Network
  * [AmpliFi HD Mesh Router](https://store.amplifi.com/products/amplifi-mesh-router)
* Zigbee
  * [RaspBee](https://phoscon.de/en/raspbee) Zigbee Gateway ([deCONZ](https://github.com/dresden-elektronik/deconz-rest-plugin))
  * Xiaomi Smart Door Windows Sensor (MCCGQ01LM)
  * Xiaomi Smart Human Body Sensor (RTCGQ01LM)
  * Xiaomi Smart Switch (WXKG01LM)
  * Xiaomi Temperature and Humidity Sensor (WSDCGQ01LM)
  * Xiaomi Zigbee Smart Plug (ZNCZ02LM)
  * IKEA Trådfri wireless dimmer (ICTC-G-1)
  * Xiaomi Gateway (DGNWG02LM)
* Lights
  * Yeelight RGB Bulb (YLDP02YL)
  * Yeelight White Bulb (YLDP01YL)
  * IKEA Trådfri E27 1000 lumen (LED1623G12)
  * IKEA Trådfri E14 400 lumen (LED1649C5)
* Media
  * [Sony TV](https://github.com/custom-components/media_player.braviatv_psk)
  * [Sony Soundbar HT-NT5](https://www.home-assistant.io/components/media_player.songpal/)
  * [Dune HD 301](https://www.home-assistant.io/components/media_player.dunehd/)
  * [Apple TV 4K](https://github.com/postlund/hass-atv-beta)
  * [Spotify](https://www.home-assistant.io/components/media_player.spotify/)
* Weather
  * [SMHI](https://www.home-assistant.io/components/smhi/)
  * [WeatherFlow](https://smartweather.weatherflow.com/map/49.5528/-16.5387/4)
* Notifications
  * [Pushover](https://pushover.net)
* Presence detection
  * [iPhone Detect](https://github.com/mudape/iphonedetect)
  * [Homekit](https://community.home-assistant.io/t/homekit-as-a-presence-sensor/50370)
* Manage and discover custom elements for Home Assistant
  * [HACS](https://github.com/hacs/integration)
* Docker Images
  * [Home Assistant](https://hub.docker.com/r/homeassistant/raspberrypi3-homeassistant/tags)
  * [deCONZ](https://hub.docker.com/r/marthoc/deconz/tags)
  * [Portainer](https://hub.docker.com/r/portainer/portainer/tags)
  * [Traefik](https://hub.docker.com/_/traefik?tab=tags)
  * [AdGuard Home](https://hub.docker.com/r/adguard/adguardhome/tags)
  * [Mosquitto](https://hub.docker.com/_/eclipse-mosquitto?tab=tags)
* Remote access
  * [Traefik reverse proxy](https://traefik.io) + [DuckDNS](https://www.duckdns.org) + [Let's Encrypt](https://letsencrypt.org)
## Home Assistant Lovelace UI
[Reeder Dark Theme](https://github.com/hekm77/reeder_dark_theme)
<img src="https://github.com/hekm77/reeder_dark_theme/blob/master/screenshots/reeder_dark_1.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/reeder_dark_theme/blob/master/screenshots/reeder_dark_2.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/reeder_dark_theme/blob/master/screenshots/reeder_dark_3.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/reeder_dark_theme/blob/master/screenshots/reeder_dark_4.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/reeder_dark_theme/blob/master/screenshots/reeder_dark_5.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/reeder_dark_theme/blob/master/screenshots/reeder_dark_6.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/reeder_dark_theme/blob/master/screenshots/reeder_dark_7.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/reeder_dark_theme/blob/master/screenshots/reeder_dark_8.png" alt="Home Assistant Lovelace UI" />

### Lovelace Custom Cards
* [alarm-control-panel-card](https://github.com/ciotlosm/custom-lovelace/tree/master/alarm_control_panel-card)
* [bar-card](https://github.com/custom-cards/bar-card)
* [button-card](https://github.com/custom-cards/button-card)
* [lovelace-card-mod](https://github.com/thomasloven/lovelace-card-mod)
* [lovelace-fold-entity-row](https://github.com/thomasloven/lovelace-fold-entity-row)
* [lovelace-slider-entity-row](https://github.com/thomasloven/lovelace-slider-entity-row)
* [lovelace-swipe-navigation](https://github.com/maykar/lovelace-swipe-navigation)
* [mini-graph-gard](https://github.com/kalkih/mini-graph-card)
* [mini-media-player](https://github.com/kalkih/mini-media-player)
* [simple-weather-card](https://github.com/kalkih/simple-weather-card)
* [vertical-stack-in-card](https://github.com/custom-cards/vertical-stack-in-card)
* [custom-header](https://github.com/maykar/custom-header)
* [lovelace-multiple-entity-row](https://github.com/benct/lovelace-multiple-entity-row)

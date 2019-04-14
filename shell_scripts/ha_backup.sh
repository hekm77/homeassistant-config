#!/bin/bash
    SERVER="192.168.1.x"
    USERNAME="username"
    PASSWORD="password"
    DESTDIR="/opt/backup"
    VERSION=`cat /home/homeassistant/.homeassistant/.HA_VERSION`
    TIMESTAMP=`/bin/date +%Y-%m-%d`
    BACKUPFILEDIR="($VERSION)-($TIMESTAMP).tar.gz"

    tar -zcvf /tmp/ha_$BACKUPFILEDIR /home/homeassistant/.homeassistant/

    curl -s --disable-epsv -v -T "/tmp/ha_$BACKUPFILEDIR" -u "$USERNAME:$PASSWORD" "ftp://$SERVER/homeassistant/backup/"

    /bin/rm /tmp/ha_$BACKUPFILEDIR

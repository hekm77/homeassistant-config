#!/bin/bash
    SERVER="192.168.1.x"
    USERNAME="username"
    PASSWORD="password"
    DESTDIR="/opt/backup"
    VERSION=`cat /home/pi/docker-deconz/.VERSION`
    TIMESTAMP=`/bin/date +%Y-%m-%d`
    BACKUPFILEDIR="($VERSION)-($TIMESTAMP).tar.gz"

    tar -zcvf /tmp/deconz_$BACKUPFILEDIR /home/pi/.local/share/dresden-elektronik/deCONZ/

    curl -s --disable-epsv -v -T "/tmp/deconz_$BACKUPFILEDIR" -u "$USERNAME:$PASSWORD" "ftp://$SERVER/deCONZ/backup/"

    /bin/rm /tmp/deconz_$BACKUPFILEDIR

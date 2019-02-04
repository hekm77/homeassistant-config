# Home Assistant Configuration
[Home Assistant](https://home-assistant.io/) установлен на [Raspberry Pi 3B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) из образа [Hassbian](https://github.com/home-assistant/pi-gen/releases) по этой [инструкции.](https://www.home-assistant.io/docs/installation/hassbian/installation/)
## Устройства и сервисы, которые я использую в HA
* Сеть
  * [AmpliFi HD Mesh Router](https://store.amplifi.com/products/amplifi-mesh-router)
* Zigbee
  * [Xiaomi Gateway](https://www.gearbest.com/living-appliances/pp_344667.html?wid=1433363)
  * [Xiaomi Smart Door Windows Sensor](https://www.gearbest.com/smart-light-bulb/pp_257677.html?wid=1433363)
  * [Xiaomi Smart Human Body Sensor](https://www.gearbest.com/smart-light-bulb/pp_257678.html?wid=1433363)
  * [Xiaomi Smart Switch](https://www.gearbest.com/smart-light-bulb/pp_257679.html?wid=1433363)
  * [Xiaomi Temperature and Humidity Sensor](https://www.gearbest.com/living-appliances/pp_344665.html?wid=1433363)
  * [Xiaomi Zigbee Smart Plug](https://www.gearbest.com/living-appliances/pp_344666.html?wid=1433363)
* Освещение
  * [Yeelight RGB Bulb](https://www.gearbest.com/smart-lighting/pp_361555.html?wid=1433363)  
  * [Yeelight White Bulb](https://www.gearbest.com/smart-light-bulb/pp_278478.html?wid=1433363)
* Медиа
  * Sony TV с кастомным [компонентом](https://github.com/gerard33/home-assistant/blob/master/braviatv_psk.py)
  * Sony Soundbar HT-NT5 с компонентом [songpal](https://www.home-assistant.io/components/media_player.songpal/)
  * [Dune HD 301](https://www.home-assistant.io/components/media_player.dunehd/)
  * [Spotify](https://www.home-assistant.io/components/media_player.spotify/)
* Погода
  * [DarkSky](https://darksky.net/dev)
* Уведомления
  * [Pushover](https://pushover.net)
* Обнаружение присутствия
  * [Кастомный компонент](https://community.home-assistant.io/t/composite-device-tracker-platform/67345/97?u=hekm77) для iOS девайсов
* Отслеживание и обновление пользовательских карт / компонентов и python-скриптов
  * [Кастомный компонент](https://github.com/custom-components/custom_updater)
## Home Assistant Lovelace UI
На скриншотах измененная тема [midnight](https://community.home-assistant.io/t/midnight-theme/28598)
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_1.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_2.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_3.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_4.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_5.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_6.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_7.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_8.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_9.png" alt="Home Assistant Lovelace UI" />

### Кастомные карты Lovelace
* [Mini Graph Card](https://github.com/kalkih/mini-graph-card)
* [Mini Media Player](https://github.com/kalkih/mini-media-player)
* [Button card](https://github.com/kuuji/button-card)
* [Card-modder](https://github.com/thomasloven/lovelace-card-modder)
* [Card-tools](https://github.com/thomasloven/lovelace-card-tools)
* [Fold-entity-row](https://github.com/thomasloven/lovelace-fold-entity-row)
* [Layout-card](https://github.com/thomasloven/lovelace-layout-card)
* [Big number card](https://github.com/ciotlosm/custom-lovelace/tree/master/bignumber-card)
* [Alarm control panel card](https://github.com/ciotlosm/custom-lovelace/tree/master/alarm_control_panel-card)
* [Tracker card](https://github.com/custom-cards/tracker-card)

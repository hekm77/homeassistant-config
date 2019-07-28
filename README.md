# Home Assistant Configuration
[Home Assistant](https://home-assistant.io/) установлен на [Raspberry Pi 3B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) из образа [Hassbian](https://github.com/home-assistant/pi-gen/releases) по этой [инструкции.](https://www.home-assistant.io/docs/installation/hassbian/installation/)
## Устройства и сервисы, которые я использую в HA
* Сеть
  * [AmpliFi HD Mesh Router](https://store.amplifi.com/products/amplifi-mesh-router)
* Zigbee
  * [RaspBee](https://www.dresden-elektronik.de/funktechnik/solutions/wireless-light-control/raspbee/?L=1&cHash=c9c902ccdb43164696acccf81b62b2bd) (deCONZ)
  * [Xiaomi Smart Door Windows Sensor](https://www.gearbest.com/smart-light-bulb/pp_257677.html?wid=1433363)
  * [Xiaomi Smart Human Body Sensor](https://www.gearbest.com/smart-light-bulb/pp_257678.html?wid=1433363)
  * [Xiaomi Smart Switch](https://www.gearbest.com/smart-light-bulb/pp_257679.html?wid=1433363)
  * [Xiaomi Temperature and Humidity Sensor](https://www.gearbest.com/living-appliances/pp_344665.html?wid=1433363)
  * [Xiaomi Zigbee Smart Plug](https://www.gearbest.com/living-appliances/pp_344666.html?wid=1433363)
  * [TRÅDFRI wireless dimmer](https://www.ikea.com/se/sv/catalog/products/00347831/)
* Освещение
  * [Xiaomi Gateway](https://www.gearbest.com/living-appliances/pp_344667.html?wid=1433363)
  * [Yeelight RGB Bulb](https://www.gearbest.com/smart-lighting/pp_361555.html?wid=1433363)  
  * [Yeelight White Bulb](https://www.gearbest.com/smart-light-bulb/pp_278478.html?wid=1433363)
  * [TRÅDFRI bulb E27 opal 1000lm](https://www.ikea.com/se/sv/catalog/products/60338452/)
  * [TRÅDFRI bulb E14 W op/ch 400lm](https://www.ikea.com/se/sv/catalog/products/60365271/)
* Медиа
  * Sony TV с кастомным [компонентом](https://github.com/gerard33/home-assistant/blob/master/braviatv_psk.py)
  * Sony Soundbar HT-NT5 с компонентом [songpal](https://www.home-assistant.io/components/media_player.songpal/)
  * [Dune HD 301](https://www.home-assistant.io/components/media_player.dunehd/)
  * [Spotify](https://www.home-assistant.io/components/media_player.spotify/)
* Погода
  * [SMHI](https://www.home-assistant.io/components/smhi/)
  * [WeatherFlow](https://smartweather.weatherflow.com/map/49.5528/-16.5387/4)
* Уведомления
  * [Pushover](https://pushover.net)
* Обнаружение присутствия
  * [Кастомный компонент ping_arp](https://gist.github.com/JBelinchon/65405c85f228de027947c7ab38751687) для iOS девайсов
* Установка, обновление пользовательских карт / компонентов / python-скриптов
  * [HACS](https://custom-components.github.io/hacs/)
## Home Assistant Lovelace UI
На скриншотах тема [reeder](https://github.com/hekm77/homeassistant-config/blob/master/themes/reeder.yaml)
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_1.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_2.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_3.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_4.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_5.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_6.png" alt="Home Assistant Lovelace UI" />
<img src="https://github.com/hekm77/homeassistant-config/blob/master/screenshots/hass_7.png" alt="Home Assistant Lovelace UI" />

### Кастомные карты Lovelace
* [alarm-control-panel-card](https://github.com/ciotlosm/custom-lovelace/tree/master/alarm_control_panel-card)
* [bar-card](https://github.com/custom-cards/bar-card)
* [button-card](https://github.com/custom-cards/button-card)
* [config-template-card](https://github.com/custom-cards/config-template-card)
* [lovelace-card-mod](https://github.com/thomasloven/lovelace-card-mod)
* [lovelace-card-modder](https://github.com/thomasloven/lovelace-card-modder)
* [lovelace-card-templater](https://github.com/gadgetchnnel/lovelace-card-templater)
* [lovelace-card-tools](https://github.com/thomasloven/lovelace-card-tools)
* [lovelace-fold-entity-row](https://github.com/thomasloven/lovelace-fold-entity-row)
* [lovelace-gap-card](https://github.com/thomasloven/lovelace-gap-card)
* [lovelace-slider-entity-row](https://github.com/thomasloven/lovelace-slider-entity-row)
* [mini-graph-gard](https://github.com/kalkih/mini-graph-card)
* [mini-media-player](https://github.com/kalkih/mini-media-player)
* [simple-weather-card](https://github.com/kalkih/simple-weather-card)

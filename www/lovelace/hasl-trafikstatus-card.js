/// This card based on https://github.com/hasl-platform/lovelace-hasl-traffic-status-card
class HASLTrafikstatusCard extends HTMLElement {
    set hass(hass) {
        if (!this.content) {
            const card = document.createElement('ha-card');
            this.content = document.createElement('div');
            card.appendChild(this.content);
            this.appendChild(card);
        }

        const config = this.config;

        function getEntitiesContent(data) {
            var html =`<style>
            ha-card {
                padding: 16px;
                box-shadow: none;
                background-color: transparent;
            }

            ha-icon {
                transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;
                width: 24px;
                height: 24px;
                color: var(--paper-item-icon-color);
            }

            table.sl-table {
                width: 100%;
                border-spacing: 0px 8px;
            }

            td.col1 {
                text-align: center;
                width: 24px;
                height: 30px;
            }
            td.col2 {
                padding-left: 10px;
                text-align: left;
                line-height: 18px;
            }
            </style>`;

            for (var i = 0; i < data.length; i++) {

                 const entity_data = hass.states[data[i]]
                 if (typeof entity_data === 'undefined') {
                     var str = 'Entity data missing'
                     console.log(str)
                 }
                 else {
                      html += "<table class=\"sl-table\">"

                      var events = entity_data.attributes[config.events]

                      if (typeof events !== 'undefined') {

                          for (var k = 0; k < events.length; k++) {
                               // Status
                               if (events[k].StatusIcon === 'mdi:close') {
                                   var icon_color = 'color:var(--google-red-500)';
                               } else if (events[k].StatusIcon === 'mdi:clock-alert-outline') {
                                   var icon_color = 'color:#FFA73B';
                               } else if (events[k].StatusIcon === 'mdi:check') {
                                   var icon_color = 'color:var(--google-green-500)';
                               } else if (events[k].StatusIcon === 'mdi:triangle-outline') {
                                   var icon_color = 'color:var(--secondary-text-color)';
                               }

                               if (events[k].EventId !== 0) {
                               html += `
                                   <tr>
                                       <td class="col1" valign="top"><ha-icon style="${icon_color}" icon="${events[k].StatusIcon}"></ha-icon></td>
                                       <td class="col2" colspan="2"><b>${events[k].TrafficLine}:</b><br/><i>${events[k].Message}</i></td>
                                   </tr>
                               `
                               } else {
                               html += `
                                   <tr>
                                       <td class="col1 valign="top"><ha-icon style="${icon_color}" icon="${events[k].StatusIcon}"></ha-icon></td>
                                       <td class="col2" colspan="2"><b>Övriga linjer:</b><i> inga större störningar</i></td>
                                   </tr>
                               `
                               }
                          }
                      }
                       html += `</table>`;
                }
            }
            return html;
        }
        this.content.innerHTML = getEntitiesContent(this.config.entities);
    }

    setConfig(config) {
        if (!config.entities) {
            throw new Error('You need to define one or more entities');
        }
    this.config = config;
    }

    getCardSize() {
        return this.config.entities.length + 1;
    }
}

customElements.define('hasl-trafikstatus-card', HASLTrafikstatusCard);

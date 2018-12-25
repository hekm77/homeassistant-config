class BigNumberCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  setConfig(config) {
    if (!config.entity) {
      throw new Error('Please define an entity');
    }

    const root = this.shadowRoot;
    if (root.lastChild) root.removeChild(root.lastChild);
    const cardConfig = Object.assign({}, config);
    if (!cardConfig.scale) cardConfig.scale = "50px";
    if (!cardConfig.from) cardConfig.from = "left";
    const card = document.createElement('ha-card');
    const content = document.createElement('div');
    content.id = "value"
    const title = document.createElement('div');
    title.id = "title"
    title.textContent = cardConfig.title;
    const style = document.createElement('style');
    style.textContent = `
      ha-card {
        text-align: center;
        --base-unit: ${cardConfig.scale};
        padding: calc(var(--base-unit)*0.6) calc(var(--base-unit)*0.3);
        border-radius: 10px;
      }
      #value {
        font-size: calc(var(--base-unit) * 1.1);
        line-height: calc(var(--base-unit) * 2);
        color: var(--primary-text-color);
      }
      #title {
        font-size: calc(var(--base-unit) * 0.8);
        line-height: calc(var(--base-unit) * 1);
        color: var(--accent-color);
      }
    `;
    card.appendChild(content);
    card.appendChild(title);
    card.appendChild(style);
    root.appendChild(card);
    this._config = cardConfig;
  }

  set hass(hass) {
    const config = this._config;
    const root = this.shadowRoot;
    const entityState = hass.states[config.entity].state;

    if (entityState !== this._entityState) {
      root.getElementById("value").textContent = `${entityState}`;
      this._entityState = entityState
    }
    root.lastChild.hass = hass;
  }

  getCardSize() {
    return 1;
  }
}

customElements.define('bignumber-card-custom', BigNumberCard);

var LitElement =
  LitElement ||
  Object.getPrototypeOf(customElements.get("home-assistant-main"));
var html = LitElement.prototype.html;

class TextHeader extends LitElement {
  static get properties() {
    return {
      _config: {}
    };
  }

  setConfig(config) {
    if (!config || !config.text) {
      throw new Error("Error in card configuration.");
    }

    this._config = config;
  }

  render() {
    if (!this._config) {
      return html``;
    }

    return html`
      ${this.renderStyle()}
      <h2 class="text-header"><span>${this._config.text}</span></h2>
    `;
  }

  renderStyle() {
    return html`
      <style>
        .text-header {
          padding: 0px 16px 16px 10px;
          text-align: center;
          color: var(--secondary-text-color);
          font-size: 1.4em;
          font-weight: 400;
          letter-spacing: .05em;
        }
      </style>
    `;
  }
}

customElements.define("text-header", TextHeader);

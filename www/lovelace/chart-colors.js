// Add this to your lovelace resources as
// url: /local/chart-colors.js
// type: module

customElements.whenDefined('ha-chart-base').then(() => {

  // Find the HaChartBase class
  const HaChartBase = customElements.get('ha-chart-base');

  // Write a new color list generator
  function getColorList(cnt) {
    let retval = [];
    // This one just makes a list of all magenta
    while(cnt--)
      retval.push(Color().rgb(228,94,101));
    return retval;
  }

  // Replace the color list generator in the base class
  HaChartBase.getColorList = getColorList;

  // Force lovelace to redraw everything
  const  ev = new Event("ll-rebuild", {
      bubbles: true,
      cancelable: false,
      composed: true,
  });
  var root = document.querySelector("home-assistant");
  root = root && root.shadowRoot;
  root = root && root.querySelector("home-assistant-main");
  root = root && root.shadowRoot;
  root = root && root.querySelector("app-drawer-layout partial-panel-resolver");
  root = root && root.shadowRoot || root;
  root = root && root.querySelector("ha-panel-lovelace");
  root = root && root.shadowRoot;
  root = root && root.querySelector("hui-root");
  root = root && root.shadowRoot;
  root = root && root.querySelector("ha-app-layout #view");
  root = root && root.firstElementChild;
  if (root) root.dispatchEvent(ev);
});

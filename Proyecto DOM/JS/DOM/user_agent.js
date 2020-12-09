const $d = document;

export default function userAgent(dondeMostrarDatos) {
  const $contenedorDatosUA = $d.querySelector(dondeMostrarDatos),
    uA = navigator.userAgent,
    isMovile = {
      android: () => uA.match(/android/i),
      ios: () => uA.match(/iphone|ipad|ipod/i),
      windows: () => uA.match(/windows iphone/i),
      any: function () {
        return this.android() || this.ios() || this.windows();
      },
    },
    isDesktop = {
      linux: () => uA.match(/linux/i),
      mac: () => uA.match(/mac os/),
      windows: () => uA.match(/windows nt/i),
      any: function () {
        return this.linux() || this.mac() || this.windows();
      },
    },
    isBrowser = {
      chrome: () => uA.match(/chrome/i),
      safari: () => uA.match(/safari/i),
      firefox: () => uA.match(/firefox/i),
      opera: () => uA.match(/opera/i),
      edge: () => uA.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera() ||
          this.edge()
        );
      },
    };

  $contenedorDatosUA.innerHTML = `<ul data-dark-text>
        <li><b>User Agent:</b> ${uA}</li>
        <li><b>Plataforma utilzada:</b> ${
          isMovile.any() || isDesktop.any()
        }</li>
        <li><b>Navegador en uso:</b> ${isBrowser.any()}</li>
    </ul>`;
}

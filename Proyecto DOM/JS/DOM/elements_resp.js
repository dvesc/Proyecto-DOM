const $d = document;

export default function elementsResponsives(
  mediaQuery,
  IframeAAplicarResp,
  contenidoEnPC,
  contenidoEnMovile
) {
  let mediaConten = matchMedia(mediaQuery);
  const elemConten = $d.getElementById(IframeAAplicarResp),
    evForParaConten = (m) =>
      m.matches
        ? (elemConten.innerHTML = contenidoEnPC)
        : (elemConten.innerHTML = contenidoEnMovile);

  evForParaConten(mediaConten);
  mediaConten.addEventListener("change", () => evForParaConten(mediaConten));
}
const $d = document;

export default function stylesResponsives(
  mediaQuery,
  elemStyleAAplicarRest,
  styleEnMovile
) {
  let mediaStyle = matchMedia(mediaQuery);
  const elemStyle = $d.querySelector(elemStyleAAplicarRest),
    evForParaStyles = (m) =>
      m.matches
        ? elemStyle.classList.remove(styleEnMovile)
        : elemStyle.classList.add(styleEnMovile);

  evForParaStyles(mediaStyle);
  mediaStyle.addEventListener("change", () => evForParaStyles(mediaStyle));
}

const $d = document, $w = window;


export function botonScroll(btnSroll) {
  const botonScroll = $d.querySelector(btnSroll);

  $d.addEventListener("click", e => {
    if (e.target.matches(".boton-scroll")) window.scrollTo(0, 0)
  });

  $w.addEventListener("scroll", e =>
    ($w.scrollY > 700)
      ? botonScroll.classList.add("des-oculto")
      : botonScroll.classList.remove("des-oculto"));
}


export function modoOscuro(btnLightDark) {
  const $btnLightDark = $d.querySelector(btnLightDark),
    $elemPrincipales = $d.querySelectorAll("[data-dark-claro]"),
    $textos = $d.querySelectorAll("[data-dark-text]"),
    $elemDeFondo = $d.querySelectorAll("[data-dark-oscuro]"),
    evaluaModDark =()=>{
    $elemPrincipales.forEach(elem => elem.classList.toggle("dark-claro"));
    $textos.forEach(elem => elem.classList.toggle("dark-text"));
    $elemDeFondo. forEach(elem => elem.classList.toggle("dark-oscuro"));
    $btnLightDark.classList.toggle("activo");
  }

  $d.addEventListener("click", e => {
    if (e.target.matches(btnLightDark)) {
      evaluaModDark();
      ($btnLightDark.classList.contains("activo"))
        ? localStorage.setItem("modDark", "activo")
        : localStorage.removeItem("modDark");
    }
  })

  $d.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("modDark")) evaluaModDark();
  })
}

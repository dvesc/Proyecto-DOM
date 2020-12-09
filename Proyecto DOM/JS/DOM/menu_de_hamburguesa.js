export default function muestraMenu(panelDesplegable, boton, enlaces) {
  const $d = document,
    ocultaPanel = () => {
      $d.querySelector(boton).classList.remove("is-active");
      $d.querySelector(panelDesplegable).classList.remove("menu-activo");
    };

  $d.addEventListener("click", (e) => {
    if (e.target.closest(boton)) {
      $d.querySelector(boton).classList.toggle("is-active");
      $d.querySelector(panelDesplegable).classList.toggle("menu-activo");
    }
    if (e.target.matches(enlaces) || e.target.matches(".boton-light-dark"))
      ocultaPanel();

    if (e.target.closest(".main") || e.target.closest(".cabezera"))
      ocultaPanel();
  });
}

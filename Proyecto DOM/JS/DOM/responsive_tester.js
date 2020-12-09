const $d = document;

export default function respTester(form) {
  let pagAbierta;
  const $form = $d.querySelector(form),
    abrirPag = (p) =>
      (pagAbierta = open(
        p,
        "tester",
        `innerWidth=${$form.ancho.value},
        innerHeight=${$form.alto.value}`
      ));

  $d.addEventListener("submit", (e) => {
    if (e.target.matches(form)) {
      e.preventDefault();
      $form.cerrar.removeAttribute("disabled");
      abrirPag($form.url.value);
      $form.url.value = "";
      $form.ancho.value = "";
      $form.alto.value = "";
    }
  });
  $d.addEventListener("click", (e) => {
    if (e.target === $form.cerrar) pagAbierta.close();
  });
}

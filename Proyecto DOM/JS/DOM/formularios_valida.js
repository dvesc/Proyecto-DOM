const $d = document;
export default function validaFormulario() {
  const $requeridos = $d.querySelectorAll(".formulario [required]");
  $requeridos.forEach((el) =>
    el.insertAdjacentHTML(
      "afterend",
      `<span id="${el.name}" class="contact-form-error none">${el.title}</span>`
    )
  );
  $d.addEventListener("keyup", (e) => {
    if (e.target.matches(".formulario [required]")) {
      let $elem = e.target,
        exp = new RegExp($elem.pattern || $elem.dataset.pattern);

      if (exp && $elem.value !== "")
        !exp.test($elem.value)
          ? $d.getElementById($elem.name).classList.add("is-active")
          : $d.getElementById($elem.name).classList.remove("is-active");
      else
        $elem.value === ""
          ? $d.getElementById($elem.name).classList.add("is-active")
          : $d.getElementById($elem.name).classList.remove("is-active");
    }
  });

  $d.addEventListener("submit", (e) => {
    if (e.target.matches(".formulario")) {
      const $loader = $d.querySelector(".form-contact-loader"),
        $sms = $d.querySelector(".form-contact-responsive");

      $loader.classList.remove("none")
      setTimeout(()=>{
        e.target.reset();
        $loader.classList.add("none")
        $sms.classList.remove("none")
        setTimeout(()=> $sms.classList.add("none"), 3000)
      },2000)
    }
  });
}

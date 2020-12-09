const $d = document;

export default function cuentaRegresiva(
  contenedorDelValor,
  btnActiva,
  btnDetiene,
  inputDate,
  mostrarAlTerminar
) {
  const $contenedorDelValor = $d.querySelector(contenedorDelValor),
    $btnActiva = $d.querySelector(btnActiva);
  let fechaIngresada, countDown, dias, horas, minutos, segundos;

  const iniciaCountDown = () => {
    return (countDown = setInterval(() => {
      dias = Math.floor((fechaIngresada - Date.now()) / 86400000);
      horas = Math.floor((fechaIngresada - Date.now()) / 3600000);
      minutos = Math.floor((fechaIngresada - Date.now()) / 60000);
      segundos = Math.floor((fechaIngresada - Date.now()) / 1000);
      $contenedorDelValor.textContent = `faltan: ${dias} dias, ${horas} horas,
                    ${minutos} minutos y ${segundos} segundos`;
      if (segundos === 0) {
        clearInterval(countDown);
        alert(mostrarAlTerminar);
        $btnActiva.removeAttribute("disabled");
      }
    }, 1000));
  };
  
  $d.addEventListener("click", (e) => {
    if (e.target.matches(btnActiva)) {
      $btnActiva.disabled = "true";
      fechaIngresada = Date.parse($d.querySelector(inputDate).value);
      fechaIngresada > Date.now()
        ? iniciaCountDown()
        : ($contenedorDelValor.textContent =
            "Por favor ingresa una fecha a ocurrir");
    }
    if (e.target.matches(btnDetiene)) {
      clearInterval(countDown);
      $btnActiva.removeAttribute("disabled");
      $contenedorDelValor.textContent = "";
      $d.querySelector(inputDate).value = "";
    }
  });
}

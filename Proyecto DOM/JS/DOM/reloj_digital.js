const $d = document;
let actualizaValorDeReloj, iniciaAlarma;

export const relojDigital = (
  contenedorDelReloj,
  btnActivaReloj,
  btnDetenReloj 
) => {
  const $contenedorDelReloj = $d.querySelector(contenedorDelReloj),
    $activaReloj = $d.querySelector(btnActivaReloj);

  $d.addEventListener("click", (e) => {
    if (e.target.matches(btnActivaReloj)) {
      $activaReloj.disabled = "true";
      $contenedorDelReloj.textContent = new Date().toLocaleTimeString();
      actualizaValorDeReloj = setInterval(
        () =>
          ($contenedorDelReloj.textContent = new Date().toLocaleTimeString()),
        1000 
      );
    }
    if (e.target.matches(btnDetenReloj)) {
      clearInterval(actualizaValorDeReloj);
      $contenedorDelReloj.textContent = "";
      $activaReloj.removeAttribute("disabled");
    }
  });
};

export function alarmaSonora(audioAUtilizar, btnActivaAlarma, btnQuitaAlarma) {
  const $etiquetaAudio = $d.createElement("audio"),
    $btnActivaAlarma = $d.querySelector(btnActivaAlarma);

  $etiquetaAudio.src = audioAUtilizar;

  $d.addEventListener("click", (e) => {
    if (e.target.matches(btnActivaAlarma)) {
      $btnActivaAlarma.disabled = "true";
      iniciaAlarma = setTimeout(() => $etiquetaAudio.play(), 1000);
    }
    if (e.target.matches(btnQuitaAlarma)) {
      clearTimeout(iniciaAlarma);
      $etiquetaAudio.currentTime = 0;
      $etiquetaAudio.pause();
      $btnActivaAlarma.removeAttribute("disabled");
    }
  });
}

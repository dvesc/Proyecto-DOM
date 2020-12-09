const $d = document;

export default function sorteo(contenedorDelSorteo, btnInciar) {
  const $sorteo = $d.querySelector(contenedorDelSorteo),
    jugadores = [
      "Venezuela",
      "Colombia",
      "Mexico",
      "Paraguay",
      "Uruguay",
      "Chile",
      "Colombia",
      "Ecuador",
      "Bolivia",
    ];

  $sorteo.innerHTML = jugadores.join("<br>");

  $d.addEventListener("click", (e) => {
    if (e.target.matches(btnInciar))
      alert(
        `El ganador es: ${
          jugadores[Math.floor(Math.random() * jugadores.length)]
        }`
      );
  });
}




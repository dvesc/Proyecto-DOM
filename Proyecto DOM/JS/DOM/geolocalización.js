//import { elementsResponsives } from "../Responsive/elements_resp";

const $d = document,
  $n = navigator;

export default function ubicacion() {
  const $datosUbicacion = $d.querySelector(".datosDeLaUbicacion"),
    ex = (p) =>
      ($datosUbicacion.innerHTML = `<ul>
                <li><b>Latitud:</b> ${p.coords.latitude}</li>
                <li><b>Longitud:</b> ${p.coords.longitude}</li>
                <li><b>Margen de error:</b> ${p.coords.accuracy}m a la redonda</li>
            </ul>
            <a href="https://www.google.com/maps/@${p.coords.latitude},${p.coords.longitude},18z"
            target="_black" rel="noopener">Ir a Google Maps</a>`),
    er = (e) => ($datosUbicacion.innerHTML = `Error: "${e.message}"`),
    op = {
      enableHightAccuracy: true,
      timeout: 4000,
      maximumAge: 0,
    };

  $n.geolocation.getCurrentPosition(ex, er, op);
}

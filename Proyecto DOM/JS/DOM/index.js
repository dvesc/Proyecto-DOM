import { default as muestraMenu } from "./menu_de_hamburguesa.js";
import { default as mueveObjeto } from "./desplaza_objetos.js";
import { default as cuentaRegresiva } from "./cuenta_regresiva.js";
import { default as elementsResponsives } from "./elements_resp.js";
import { default as respTester } from "./responsive_tester.js";
import { default as userAgent } from "./user_agent.js";
import { default as evaluaConexion } from "./sin_conexion.js";
import { default as webCam } from "./web_cam.js";
import { default as stylesResponsives } from "./styles_resp.js";
import { default as ubicacion } from "./geolocalización.js";
import { default as filtroDeBusqueda } from "./filtro_de_busqueda.js";
import { default as sorteo } from "./sorteo_digital.js";
import { default as scrollSpy } from "./scroll_espia.js";
import { default as videoIntell } from "./video_inteligente.js";
import { default as narrador } from "./narrador.js";
import { relojDigital, alarmaSonora } from "./reloj_digital.js";
import { modoOscuro, botonScroll } from "./botones.js";
import { slider } from "./responsive_slider.js";
import { default as validaFormulario } from "./formularios_valida.js";

document.addEventListener("DOMContentLoaded", () => {
  alarmaSonora("./assets/alarm-clock.mp3", ".activaAlarma", ".detenAlarma");
  botonScroll(".boton-scroll");
  cuentaRegresiva(
    ".countDown",
    ".iniciaConteo",
    ".reiniciaConteo",
    ".elInput",
    "Gracias por perder su tiempo esperando esto :3"
  );
  elementsResponsives(
    "(min-width : 800px)",
    "youtubeVideo",
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/RaH4cYcOGU0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,
    `<a href="https://www.youtube.com/watch?v=RaH4cYcOGU0" target="_blank">Ver video</a>`
  );
  filtroDeBusqueda(".busqueda", ".tarjeta");
  mueveObjeto(".objMovil", ".espacioMovil");
  muestraMenu(".panel", ".hamburger", ".enlace");
  relojDigital(".relojDigital", ".activaReloj", ".detenReloj");
  respTester("#respTester");
  scrollSpy();
  sorteo(".contenedorSorteo",".iniciarSorteo");
  slider();
  stylesResponsives("(min-width : 813px)", ".panel", "responsiveAside");
  ubicacion();
  userAgent(".contenedor");
  validaFormulario();
  videoIntell(".videoIntell");
  webCam(".videoWebCam", ".activar", ".desactivar");
});

evaluaConexion();
modoOscuro(".boton-light-dark");
narrador();

const $d = document;

export default function evaluaConexion() {
  const $mensaje = $d.createElement("div"),
    statusDeRed = () => {
      !navigator.onLine
        ? ($mensaje.textContent = "Lo sentimos, no tienes conexion")
        : ($mensaje.textContent = "Conexion restablecida");

      $mensaje.classList.toggle("con-conexion");
      $mensaje.classList.toggle("sin-conexion");

      $d.querySelector("header").after($mensaje);
      setTimeout(() => $d.body.removeChild($mensaje), 3000);
    };
  $mensaje.classList.add("con-conexion");

  window.addEventListener("online", (e) => statusDeRed());
  window.addEventListener("offline", (e) => statusDeRed());
}

/*  OTRA FORMA DE HACERLO
    export default function evaluaConexion(alerta) {
    let tempoSin, tempoCon;
    const $alerta = $d.querySelector(alerta),
        sinInternet = () => {
            $alerta.textContent = "Lo sentimos, no tienes conexion";
            $alerta.classList.add("sin-conexion");
            return tempoSin = setTimeout(() => 
                $alerta.classList.remove("sin-conexion")
                , 3000);
        },
        regresoInternet = () => {
            $alerta.textContent = "Conexion restablecida";
            $alerta.classList.add("con-conexion");
            return tempoCon =  setTimeout(() => 
                $alerta.classList.remove("con-conexion")
                , 3000);
        };

    $c.onchange = () => ($c.rtt < 32) ?sinInternet() :regresoInternet()
}
*/

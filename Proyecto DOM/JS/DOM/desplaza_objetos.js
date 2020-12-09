export default function mueveObjeto(objAMover, contenedorDelObj) {
  const $d = document;
  let limiteEn = $d.querySelector(contenedorDelObj).getBoundingClientRect(),
    movimientoEn = $d.querySelector(objAMover).getBoundingClientRect(),
    Y = 0,
    X = 0;

  $d.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        if (movimientoEn.top > limiteEn.top + 15) {
          Y -= 10;
          e.preventDefault();
        }
        break;

      case "ArrowDown":
        if (movimientoEn.bottom < limiteEn.bottom - 15) {
          Y += 10;
          e.preventDefault();
        }
        break;

      case "ArrowLeft":
        if (movimientoEn.left > limiteEn.left + 15) X -= 10;
        break;

      case "ArrowRight":
        if (movimientoEn.right < limiteEn.right - 15) X += 10;
        break;
    }

    $d.querySelector(objAMover).style.transform = `translate(${X}px ,${Y}px)`;
    movimientoEn = $d.querySelector(objAMover).getBoundingClientRect();
    limiteEn = $d.querySelector(contenedorDelObj).getBoundingClientRect();
  });
}

/* movimientoEn = $objAMover.getBoundingClientRect();
   ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
   Actualiza el valor de la propiedad '---' del objeto '---' del elemento a mover ya que si no seguiría
   teniendo el mismo valor que cuando lo declaramos, por ende en el condicional siempre sera true
*/

/*  limiteEn = $contenedorDelObj.getBoundingClientRect();
    ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    Actualiza el valor de la propiedad '---'del objeto '---'del contenedor del obj que se mueve...Por que?
    pues porque al igual que lo anterior el valor seguiria siendo el mismo que cuando lo declaramos...pero
    no se supone que no de mueve?? por lo tanto el valor no seria igual siempre??? NO!!! porque dependera en
    que parte pongamos el scroll
*/

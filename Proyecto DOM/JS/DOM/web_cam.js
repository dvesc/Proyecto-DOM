const $d = document;

export default function webCam(pantallaWebCam, btnActivar, btnDesactivar) {
  const activaWebCam = async () => {
    try {
      let peti = await navigator.mediaDevices.getUserMedia({ video: true });
      $d.querySelector(pantallaWebCam).srcObject = peti;
      $d.querySelector(pantallaWebCam).play();
    } catch (error) {
      alert("No puedes usar esta función ya que no nos diste persimo :c");
    }
  };
  if (navigator.mediaDevices.getUserMedia) {
    $d.addEventListener("click", (e) => {
      if (e.target.matches(btnActivar)) activaWebCam();
      if (e.target.matches(btnDesactivar)) {
        $d.querySelector(pantallaWebCam).pause();
        $d.querySelector(pantallaWebCam).srcObject = null;
      }
    });
  }
}

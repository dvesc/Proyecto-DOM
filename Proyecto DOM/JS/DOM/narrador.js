const $d = document;
export default function narrador() {
  const $speechSelect = $d.querySelector(".formato-de-voz"),
    $speechTextarea = $d.querySelector(".text-a-narrar"),
    $speechButton = $d.querySelector(".narrar"),
    narra = new SpeechSynthesisUtterance();
  let voces = [];

  $d.addEventListener("DOMContentLoaded", () => {
    speechSynthesis.addEventListener("voiceschanged", () => {
      voces = speechSynthesis.getVoices();
      voces.forEach((voz) =>
        $speechSelect.insertAdjacentHTML(
          "beforeend",
          `<option value="${voz.name}">${voz.name}***${voz.lang}</option>`
        )
      );
    });
  });

  $d.addEventListener("change", (e) => {
    if (e.target === $speechSelect)
      narra.voice = voces.find((objVoz) => objVoz.name === e.target.value);
  });

  $d.addEventListener("click", (e) => {
    if (e.target === $speechButton) {
      narra.text = $speechTextarea.value;
      speechSynthesis.speak(narra);
    }
  });
}

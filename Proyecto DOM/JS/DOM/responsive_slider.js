const $d = document;

export function slider() {
  const imgs = $d.querySelectorAll(".slider-slide"),
    fAvanzar = () => { 
      imgs[i].classList.remove("active");
      i++;
      if (i > imgs.length-1) i = 0;
      imgs[i].classList.add("active")
    }
  let i = 0,
    tempo = setInterval(()=> fAvanzar(), 6000);

  $d.addEventListener("click", e =>{
    if (e.target.matches(".next")){
      clearInterval(tempo);
      fAvanzar();
      tempo = setInterval(()=> fAvanzar(), 6000);
    }

    if (e.target.matches(".prev")){
      clearInterval(tempo)
      imgs[i].classList.remove("active")
      i--;
      if (i < 0) i = imgs.length-1;
      imgs[i].classList.add("active")
      tempo = setInterval(()=> fAvanzar(), 6000);
    }
  })
}

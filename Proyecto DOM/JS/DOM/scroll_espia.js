const $d = document;

export default function scrollSpy (){
  const $sec = $d.querySelectorAll("section[data-scroll-spy]"),
    call = (entris)=>
      entris.forEach(entri => 
        (entri.isIntersecting)
          ?$d.querySelector(`a[data-scroll-spy][href="#${entri.target.getAttribute("id")}"]`)
          .classList.add("obsActiv")
          : $d.querySelector(`a[data-scroll-spy][href="#${entri.target.getAttribute("id")}"]`)
          .classList.remove("obsActiv")
      ),
    observador = new IntersectionObserver(call, {threshold: [0.7, 1]});

  $sec.forEach((el) => observador.observe(el));

}
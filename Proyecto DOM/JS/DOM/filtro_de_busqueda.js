const $d = document;

export default function filtroDeBusqueda(buscador, elemsABuscar) {
  const $tarjetas = $d.querySelectorAll(elemsABuscar);

  $d.addEventListener("keyup", (e) => {
    if (e.target.matches(buscador))
      for (const t of $tarjetas)
        t.textContent.toUpperCase().includes(e.target.value.toUpperCase())
          ? t.classList.remove("oculta")
          : t.classList.add("oculta");
  });
}

// Ejercicio 5: Eliminar elementos
(() => {
  const lista = document.getElementById("lista-eliminar");
  const mensajeVacio = document.getElementById("msg-vacio-eliminar");

  // Delegación de eventos: un solo listener para todos los botones
  lista.addEventListener("click", (e) => {
    const boton = e.target.closest("button");
    if (!boton) return;

    boton.closest("li").remove(); // elimina el <li> del DOM

    if (lista.children.length === 0) {
      mensajeVacio.classList.remove("oculto");
    }
  });
})();

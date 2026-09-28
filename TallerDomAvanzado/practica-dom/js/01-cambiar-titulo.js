// Ejercicio 1: Cambiar un título con un botón
(() => {
  const titulo = document.getElementById("titulo-ej1");
  const boton = document.getElementById("btn-titulo");

  boton.addEventListener("click", () => {
    // Alterna entre dos títulos
    titulo.textContent =
      titulo.textContent === "Hola, DOM" ? "¡El título cambió!" : "Hola, DOM";
  });
})();

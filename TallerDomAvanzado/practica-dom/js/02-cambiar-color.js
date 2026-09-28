// Ejercicio 2: Cambiar el color de un texto
(() => {
  const texto = document.getElementById("texto-color");
  const botones = document.querySelectorAll(".btn-color");
  const reset = document.getElementById("btn-color-reset");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      // El color viene del atributo data-color del botón
      texto.style.color = boton.dataset.color;
    });
  });

  reset.addEventListener("click", () => {
    texto.style.color = ""; // vuelve al color definido en el CSS
  });
})();

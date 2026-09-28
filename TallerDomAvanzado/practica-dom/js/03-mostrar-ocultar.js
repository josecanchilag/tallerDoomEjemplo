// Ejercicio 3: Mostrar / ocultar un elemento
(() => {
  const boton = document.getElementById("btn-toggle");
  const mensaje = document.getElementById("mensaje-toggle");

  boton.addEventListener("click", () => {
    // classList.toggle agrega la clase si no está y la quita si está
    const oculto = mensaje.classList.toggle("oculto");
    boton.textContent = oculto ? "Mostrar mensaje" : "Ocultar mensaje";
  });
})();

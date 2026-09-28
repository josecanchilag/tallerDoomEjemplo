// Ejercicio 8: Crear un formulario y mostrar sus datos
(() => {
  const form = document.getElementById("formulario");
  const nombre = document.getElementById("f-nombre");
  const correo = document.getElementById("f-correo");
  const edad = document.getElementById("f-edad");
  const error = document.getElementById("f-error");
  const resultado = document.getElementById("resultado-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // evita que la página se recargue

    if (!nombre.value.trim() || !correo.value.trim() || !edad.value) {
      error.textContent = "Completa todos los campos.";
      error.classList.remove("oculto");
      resultado.classList.add("oculto");
      return;
    }
    if (!correo.checkValidity()) {
      error.textContent = "Escribe un correo válido.";
      error.classList.remove("oculto");
      return;
    }

    error.classList.add("oculto");

    // Se usa textContent (no innerHTML) para que lo escrito no se interprete como HTML
    resultado.innerHTML = "";
    const datos = [
      ["Nombre", nombre.value.trim()],
      ["Correo", correo.value.trim()],
      ["Edad", `${edad.value} años`],
    ];
    datos.forEach(([etiqueta, valor]) => {
      const p = document.createElement("p");
      const strong = document.createElement("strong");
      strong.textContent = `${etiqueta}: `;
      p.append(strong, document.createTextNode(valor));
      resultado.appendChild(p);
    });

    resultado.classList.remove("oculto");
    form.reset();
  });
})();

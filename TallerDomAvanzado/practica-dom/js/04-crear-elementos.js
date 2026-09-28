// Ejercicio 4: Crear elementos dinámicamente
(() => {
  const input = document.getElementById("input-item");
  const boton = document.getElementById("btn-crear");
  const lista = document.getElementById("lista-dinamica");

  function agregar() {
    const valor = input.value.trim();
    if (valor === "") {
      input.focus();
      return;
    }

    const li = document.createElement("li"); // 1. crear el elemento
    li.textContent = valor;                  // 2. darle contenido
    lista.appendChild(li);                   // 3. insertarlo en el DOM

    input.value = "";
    input.focus();
  }

  boton.addEventListener("click", agregar);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") agregar();
  });
})();

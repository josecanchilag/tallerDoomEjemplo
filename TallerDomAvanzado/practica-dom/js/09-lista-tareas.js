// Ejercicio 9: Crear una lista de tareas
(() => {
  const input = document.getElementById("input-tarea");
  const boton = document.getElementById("btn-tarea");
  const lista = document.getElementById("lista-tareas");
  const contador = document.getElementById("contador-tareas");

  function actualizarContador() {
    const pendientes = lista.querySelectorAll("li:not(.tarea-completada)").length;
    contador.textContent =
      pendientes === 1 ? "1 tarea pendiente" : `${pendientes} tareas pendientes`;
  }

  function agregarTarea() {
    const texto = input.value.trim();
    if (texto === "") {
      input.focus();
      return;
    }

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.className = "tarea-texto";
    span.textContent = texto;
    span.title = "Clic para marcar como hecha";

    const eliminar = document.createElement("button");
    eliminar.className = "btn btn-peligro btn-chico";
    eliminar.textContent = "Eliminar";

    span.addEventListener("click", () => {
      li.classList.toggle("tarea-completada");
      actualizarContador();
    });

    eliminar.addEventListener("click", () => {
      li.remove();
      actualizarContador();
    });

    li.append(span, eliminar);
    lista.appendChild(li);

    input.value = "";
    input.focus();
    actualizarContador();
  }

  boton.addEventListener("click", agregarTarea);
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") agregarTarea();
  });

  actualizarContador();
})();

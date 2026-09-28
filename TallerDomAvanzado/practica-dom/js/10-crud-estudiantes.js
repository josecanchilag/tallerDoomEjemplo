// Ejercicio 10: CRUD completo de estudiantes
// C = Crear, R = Leer (mostrar tabla), U = Actualizar (editar), D = Eliminar (borrar)
(() => {
  const CLAVE = "crud-estudiantes";

  // ----- Referencias al DOM -----
  const form = document.getElementById("form-estudiante");
  const inputs = {
    nombre: document.getElementById("e-nombre"),
    correo: document.getElementById("e-correo"),
    carrera: document.getElementById("e-carrera"),
    semestre: document.getElementById("e-semestre"),
  };
  const error = document.getElementById("e-error");
  const btnGuardar = document.getElementById("btn-guardar");
  const btnCancelar = document.getElementById("btn-cancelar");
  const tbody = document.getElementById("tabla-estudiantes");
  const contador = document.getElementById("contador-estudiantes");

  // ----- Estado -----
  let estudiantes = cargar();
  let editandoId = null;

  // ----- Persistencia (localStorage) -----
  function cargar() {
    try {
      return JSON.parse(localStorage.getItem(CLAVE)) || [];
    } catch {
      return [];
    }
  }
  function guardar() {
    try {
      localStorage.setItem(CLAVE, JSON.stringify(estudiantes));
    } catch {
      /* si el navegador bloquea el almacenamiento, sigue funcionando en memoria */
    }
  }

  // ----- READ: dibujar la tabla -----
  function render() {
    tbody.innerHTML = "";

    if (estudiantes.length === 0) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = 5;
      td.className = "sin-datos";
      td.textContent = "Aún no hay estudiantes. Agrega el primero con el formulario.";
      tr.appendChild(td);
      tbody.appendChild(tr);
    }

    estudiantes.forEach((est) => {
      const tr = document.createElement("tr");
      if (est.id === editandoId) tr.classList.add("editando");

      [est.nombre, est.correo, est.carrera, est.semestre].forEach((valor) => {
        const td = document.createElement("td");
        td.textContent = valor;
        tr.appendChild(td);
      });

      const tdAcc = document.createElement("td");
      tdAcc.className = "acciones";

      const btnEditar = document.createElement("button");
      btnEditar.className = "btn btn-exito btn-chico";
      btnEditar.textContent = "Editar";
      btnEditar.dataset.accion = "editar";
      btnEditar.dataset.id = est.id;

      const btnEliminar = document.createElement("button");
      btnEliminar.className = "btn btn-peligro btn-chico";
      btnEliminar.textContent = "Eliminar";
      btnEliminar.dataset.accion = "eliminar";
      btnEliminar.dataset.id = est.id;

      tdAcc.append(btnEditar, btnEliminar);
      tr.appendChild(tdAcc);
      tbody.appendChild(tr);
    });

    const n = estudiantes.length;
    contador.textContent = n === 1 ? "1 estudiante registrado" : `${n} estudiantes registrados`;
  }

  // ----- Validación -----
  function validar() {
    Object.values(inputs).forEach((i) => i.classList.remove("invalido"));

    for (const [campo, input] of Object.entries(inputs)) {
      if (!input.value.trim()) {
        input.classList.add("invalido");
        return `El campo "${campo}" es obligatorio.`;
      }
    }
    if (!inputs.correo.checkValidity()) {
      inputs.correo.classList.add("invalido");
      return "Escribe un correo válido.";
    }
    const sem = Number(inputs.semestre.value);
    if (!Number.isInteger(sem) || sem < 1 || sem > 12) {
      inputs.semestre.classList.add("invalido");
      return "El semestre debe ser un número entre 1 y 12.";
    }
    return "";
  }

  function mostrarError(msg) {
    error.textContent = msg;
    error.classList.toggle("oculto", msg === "");
  }

  // ----- Volver al modo "crear" -----
  function salirDeEdicion() {
    editandoId = null;
    form.reset();
    btnGuardar.textContent = "Agregar estudiante";
    btnCancelar.classList.add("oculto");
    mostrarError("");
    Object.values(inputs).forEach((i) => i.classList.remove("invalido"));
  }

  // ----- CREATE / UPDATE -----
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const msg = validar();
    mostrarError(msg);
    if (msg) return;

    const datos = {
      nombre: inputs.nombre.value.trim(),
      correo: inputs.correo.value.trim(),
      carrera: inputs.carrera.value.trim(),
      semestre: Number(inputs.semestre.value),
    };

    if (editandoId === null) {
      estudiantes.push({ id: Date.now(), ...datos });          // Crear
    } else {
      estudiantes = estudiantes.map((est) =>                   // Actualizar
        est.id === editandoId ? { ...est, ...datos } : est
      );
    }

    guardar();
    salirDeEdicion();
    render();
  });

  // ----- Editar / Eliminar (delegación de eventos en la tabla) -----
  tbody.addEventListener("click", (e) => {
    const boton = e.target.closest("button[data-accion]");
    if (!boton) return;

    const id = Number(boton.dataset.id);
    const est = estudiantes.find((x) => x.id === id);
    if (!est) return;

    if (boton.dataset.accion === "editar") {
      editandoId = id;
      inputs.nombre.value = est.nombre;
      inputs.correo.value = est.correo;
      inputs.carrera.value = est.carrera;
      inputs.semestre.value = est.semestre;
      btnGuardar.textContent = "Guardar cambios";
      btnCancelar.classList.remove("oculto");
      mostrarError("");
      inputs.nombre.focus();
      render();
    }

    if (boton.dataset.accion === "eliminar") {
      if (!confirm(`¿Eliminar a ${est.nombre}?`)) return;
      estudiantes = estudiantes.filter((x) => x.id !== id);   // Eliminar
      guardar();
      if (editandoId === id) salirDeEdicion();
      render();
    }
  });

  btnCancelar.addEventListener("click", () => {
    salirDeEdicion();
    render();
  });

  render();
})();

// Ejercicio 6: Crear una lista a partir de un array
(() => {
  const lenguajes = ["JavaScript", "Python", "Java", "C#", "PHP", "TypeScript"];
  const lista = document.getElementById("lista-array");

  lenguajes.forEach((lenguaje) => {
    const li = document.createElement("li");
    li.textContent = lenguaje;
    lista.appendChild(li);
  });
})();

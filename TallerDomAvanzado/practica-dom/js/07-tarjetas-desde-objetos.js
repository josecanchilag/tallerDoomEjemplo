// Ejercicio 7: Crear tarjetas a partir de objetos
(() => {
  const productos = [
    { nombre: "Teclado mecánico", categoria: "Periféricos", precio: 189000, stock: 12 },
    { nombre: "Mouse inalámbrico", categoria: "Periféricos", precio: 65000, stock: 30 },
    { nombre: "Monitor 24\"", categoria: "Pantallas", precio: 549000, stock: 0 },
    { nombre: "Audífonos USB", categoria: "Audio", precio: 98000, stock: 8 },
  ];

  const contenedor = document.getElementById("contenedor-tarjetas");
  const formatoPeso = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  productos.forEach(({ nombre, categoria, precio, stock }) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "producto";

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;

    const cat = document.createElement("p");
    cat.className = "categoria";
    cat.textContent = categoria;

    const pre = document.createElement("p");
    pre.className = "precio";
    pre.textContent = formatoPeso.format(precio);

    const st = document.createElement("p");
    st.className = stock > 0 ? "stock" : "stock agotado";
    st.textContent = stock > 0 ? `${stock} disponibles` : "Agotado";

    tarjeta.append(titulo, cat, pre, st);
    contenedor.appendChild(tarjeta);
  });
})();

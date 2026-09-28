// console.log("Hola mundo");

// let cadena = "Hola mundo";
// let entero = 10;
// let flotante = 4.6;
// let bool = true;

// console.log(cadena);
// console.log(entero);
// console.log(flotante);
// console.log(bool);

// let a = 10;
// let b = 5;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// let edad = 20;
// if (edad >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("Eres menor de edad");
// }

// function saludar(nombre) {
//   console.log("Hola" + nombre);
// }
// saludar("Jose");

// let frutas = ["Manzana", "Pera", "Mango"];
// console.log(frutas[0]);
// frutas[1] = "Uva";
// console.log(frutas);
// frutas.push("Banano");
// delete frutas[1];
// console.log(frutas);

// let usuario = {
//   nombre: "Jose",
//   edad: 20,
//   ciudad: "Bucaramanga",
// };
// //consultar
// console.log(usuario);
// //editar
// usuario.nombre = "Juan";
// usuario.edad = 30;
// console.log(usuario);
// //eliminar una propiedad
// delete usuario.ciudad;
// console.log(usuario); 

let titulo = document.getElementById("titulo");
titulo.textContent = "Hola Jose";

let boton1 = document.getElementById("boton1");
boton1.addEventListener("click", function() {
  alert("Hola Jose");
});

let nombre= document.getElementById("nombre");
let boton2 = document.getElementById("boton2");
let resultado = document.getElementById("resultado");
boton2.addEventListener("click", function() {
  resultado.textContent = "Hola " + nombre.value;
});
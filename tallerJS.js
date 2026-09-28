// // Ejercicio 1: Saludo personalizado
// let nombre = "Jose";
// let anoNacimiento = 2006;
// console.log("Bienvenido, " + nombre + ". Naciste en " + anoNacimiento + ".");

// // Ejercicio 2: Tipos de datos en inventario
// let nombreProducto = "Audifonos inalambricos";
// let precio = 150000;
// let cantidadStock = 35;
// let disponibleEnvioInmediato = true;

// console.log("Producto: " + nombreProducto);
// console.log("Precio: " + precio);
// console.log("Cantidad en stock: " + cantidadStock);
// console.log("Disponible para envio inmediato: " + disponibleEnvioInmediato);


// // Ejercicio 3: Calculadora de area
// let base = 8;
// let altura = 5;
// let area = base * altura;
// let perimetro = 2 * (base + altura);

// console.log("Area del rectangulo: " + area);
// console.log("Perimetro del rectangulo: " + perimetro);


// // Ejercicio 4: Verificacion de acceso
// let temperatura = 30;

// if (temperatura >= 28) {
//     console.log("Alerta: Temperatura alta");
// } else {
//     console.log("Temperatura normal");
// }


// // Ejercicio 5: Tabla de multiplicar
// let calificacion = 4;

// if (calificacion == 5) {
//     console.log("Excelente");
// } else if (calificacion >= 3) {
//     console.log("Aprobado");
// } else if (calificacion >= 1) {
//     console.log("Reprobado");
// } else {
//     console.log("Calificacion no valida");
// }


// // Ejercicio 6: Funcion de conversion de moneda
// function convertirAPesosADolares(pesosColombianos) {
//     let tasaCambio = 4000;
//     let dolares = pesosColombianos / tasaCambio;
//     console.log(pesosColombianos + " COP equivalen aproximadamente a " + dolares + " USD");
// }

// convertirAPesosADolares(200000);


// // Ejercicio 7: Funcion con operador logico
// function verificarAcceso(edad, tieneAutorizacion) {
//     if (edad >= 18) {
//         console.log("Acceso permitido: true");
//     } else if (tieneAutorizacion) {
//         console.log("Acceso permitido: true");
//     } else {
//         console.log("Acceso permitido: false");
//     }
// }

// verificarAcceso(16, true);
// verificarAcceso(20, false);


// // Ejercicio 8: Gestion de lista de tareas
// let tareas = [
//     "Estudiar JavaScript",
//     "Hacer el parcial",
//     "Enviar informe"
// ];

// tareas.push("Revisar correos");
// tareas.shift();

// console.log(tareas);


// // Ejercicio 9: Catalogo de vehiculos
// let vehiculo = {
//     marca: "Toyota",
//     modelo: "Corolla",
//     anio: 2022,
//     coloresDisponibles: ["Blanco", "Negro", "Gris"]
// };

// console.log("El " + vehiculo.marca + " " + vehiculo.modelo + " esta disponible en color " + vehiculo.coloresDisponibles[0] + ".");


// // Ejercicio 10: Sistema de perfiles de usuario
// let estudiante = {
//     nombre: "Jose",
//     semestre: 7,
//     materias: {
//         materia1: "Desarrollo de Software",
//         materia2: "Lenguajes de Programacion",
//         materia3: "Gestion de Proyectos"
//     }
// };

// console.log("Estudiante: " + estudiante.nombre);
// console.log("Semestre: " + estudiante.semestre);
// console.log("Materias matriculadas: " + estudiante.materias.materia1 + ", " + estudiante.materias.materia2 + ", " + estudiante.materias.materia3);
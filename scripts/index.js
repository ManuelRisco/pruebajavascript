/* seleccionar una etiqueta del HTML */
const selector = document.getElementById("mensaje");

/* escribir dentro de esa etiqueta con JS */

selector.innerHTML = "CONEXION EXITOSA ENTRE HTML Y JS";

/*
prompt("Preguntar algo");

console.log("Imprimir algo");
*/
/*
const entrada = prompt("cual es tu nombre?");

console.log("Bienvenido "+entrada);

alert("Bienvenido "+entrada);

const numero1 = Number(prompt("Ingrese primer numero"));
const numero2 = Number(prompt("Ingrese segundo numero"));

const suma = numero1 + numero2;

const mensajeSuma = "El resultado de la suma es "+suma;

alert(mensajeSuma);

const promedio = suma / 2;
const triple = promedio * 3;
const resultadoMenosDiez = triple - 10;

alert("promedio: "+promedio+" triple: "+triple+" resultadomenosdiez: "+resultadoMenosDiez);*/


const frase = prompt("Ingrese una palabra o frase");

const cantidad = frase.length;

const fraseminusculas = frase.toLowerCase();
const frasemayusculas = frase.toUpperCase();

alert("cantidad: "+cantidad)
alert("minusculas: "+fraseminusculas)
alert("mayusculas: "+frasemayusculas)
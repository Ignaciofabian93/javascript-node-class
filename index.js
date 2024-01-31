console.log("Hello World");
var variable = "";

// ///////////////////////////////////////////////////////////////////////////////////////////////////////
// TIPOS DE DATOS

// Cadena de texto / String --> "" o ''
// Número / Number --> 1234, -1234, 0
// Booleano / Boolean --> true, false
// Objeto / Object --> { a: 1, b: 2 }
// Arreglo / Array --> [1, 2, 3]
// Null / Null --> null
// Undefined / Undefined --> undefined
// Fecha / Date --> new Date()
// Función / Function --> function () {}
// Set / Set --> new Set() // Set es un tipo de dato que no permite valores duplicados
// Clase / Class --> class {}

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// TIPOS DE VARIABLES
var noUsarVar = "";
const name = "John";
let number = 30;

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// OPERADORES ARITMETICOS

// +, -, *, /, %, ++, --

// + --> Suma
// - --> Resta
// * --> Multiplicacion
// / --> Division
// % --> Modulo (es el resto de una division)
// ++ --> Incremento
// -- --> Decremento

// Suma de dos numeros
// console.log(number + number);

// Resta de dos numeros
// console.log(number - number);

// Multiplicacion de dos numeros
// console.log(number * number);

// Division de dos numeros
// console.log(number / number);

// Modulo de dos numeros
// console.log(number % number);
// Ejemplo:

//  10 : 5 = 2
//   0 --> resto (modulo)

// Incremento de un numero
// console.log(number++);

// Decremento de un numero
// console.log(number--);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// OPERADORES LOGICOS

// <, >, <=, >=, ==, !=, ===, !==

// == --> Compara el valor
// === --> Compara el valor y el tipo de dato

// 1 == '1'
// 1 === '1'

const number1 = 1;
const number2 = 2;

const number3 = "2";

// console.log(number2 > number1);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// SHORT CIRCUITING

// && --> Si la primera condicion es falsa, no se evalua la segunda
// || --> Si la primera condicion es verdadera, no se evalua la segunda
// ! --> Inverso de la condicion
// console.log(number1 > number2 && number2 > 1); //false
// console.log(number1 > number2 || number2 > 1); // true

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// CONVERSION DE TIPOS DE DATOS

// NUMBER A STRING

// console.log(typeof number1.toString());
// console.log(typeof String(number1));

// STRING A NUMBER

// FUNCIONA SOLO EN STRINGS QUE CONTENGAN NUMEROS
// console.log(typeof parseInt("2"));
// console.log(typeof parseFloat("2"));
// console.log(typeof Number("2"));

//UNDEFINED A BOOLEAN
let indefinido;
// console.log(!indefinido); // true
// console.log(!!indefinido); // false

// NULL A BOOLEAN
const nulo = null;
// console.log(!nulo); // true
// console.log(!!nulo); // false

// ///////////////////////////////////////////////////////////////////////////////////////////////

// TERNARIAS
const ternaria1 = number1 > number2 ? "Si" : "No";
// dato.prop1.value1 ?? otroDato
const ternaria2 = indefinido ?? 10; //nullish
const ternaria3 = number1 > number2 ? "Si" : number2 > 1 ? "Si" : "No"; // Evitar esta nomenclatura
// console.log(ternaria1);
// console.log(ternaria2);
// console.log(ternaria3);

// /////////////////////////////////////////////////////////////////////////////////////////////////

// METODOS DE STRINGS (MAS USADOS)

const ejemploString = " Hola mundo ";
// console.log(ejemploString.length); // muestra el largo del dato
// console.log(ejemploString.split(" ")); // separa segun la condicion y devuelve un array
// console.log(ejemploString.split("m"));
// console.log(ejemploString.split(" ").reverse().join(" "));
// console.log(ejemploString.slice(0, 6));
// const fecha = new Date();
// console.log("Fecha: ", fecha.toISOString().slice(0, 10));
// console.log(ejemploString.startsWith("hola")); // es case sensitive
// console.log(ejemploString.includes("mundo")); // entrega true si la incluye sino false
// console.log(ejemploString.toLowerCase()); // Palabra --> palabra
// console.log(ejemploString.trim()); // " Hola " === 'Hola' --> false
// console.log(ejemploString.charAt(2));
// comodin
// console.log(ejemploString.search("l"));

// METODOS DE NUMEROS (MAS USADOS)

const ejemploNumber = 10;
const ejemploNumber2 = 14.6567;

// console.log(ejemploNumber.toString()); // '10'
// console.log(parseInt(ejemploNumber2)); // 14
// console.log(ejemploNumber2.toFixed(1)); // 14.7 redondea ultimo decimal
// console.log(Math.ceil(ejemploNumber2)); // 15 redondea hacia arriba
// console.log(Math.floor(ejemploNumber2)); // 14 redondea hacia abajo
// console.log(Math.random() + 1);

// ///////////////////////////////////////////////////////////////////////////////////////////////////////

// ARRAYS
console.log("AQUI EMPIEZAN LOS ARRAYS!!");

const arr = []; // PUEDEN CONTENER CUALQUIER TIPO DE DATO, STRING, NUMERO, OBJETOS, NULL, UNDEFINED
// console.log(typeof arr); // devuelve tipo objeto
const arr2 = [1, 2, 3, 4, 5];
const arr3 = ["1", "2", "3", "4", "5"];
const arr4 = [1, 2, 3, 4, 5]; // es otro array con los mismos valores
const arr5 = [...arr2]; // es una copia del arr2

// console.log(arr2 === arr3); // false porque son 2 objetos distintos
// console.log(arr2 == arr4); // false
// console.log(arr2 === arr5); // false
// console.log(arr2[1] === arr4[1]); // esto da true porque son 2 valores iguales
// console.log(arr5);
const arr6 = [1, 2, 3, 8, 5, 6, 7, 4, 9, 10, 11];
// METODOS DE ARRAYS
// console.log(arr6.splice(0, 5)); // ELIMINA ELEMENTOS DEL ARRAY
// console.log(arr2.push(6)); // AÑADE UN ELEMENTO AL FINAL DEL ARRAY 1,2,3,4,5,6
// console.log(arr2.pop()); // ELIMINA EL ULTIMO ELEMENTO DEL ARRAY 1,2,3,4,5
// console.log(arr2.shift()); // ELIMINA EL PRIMER ELEMENTO DEL ARRAY 2,3,4,5
// console.log(arr2.unshift(0)); // AÑADE UN ELEMENTO AL INICIO DEL ARRAY 0,2,3,4,5
// console.log(arr2.reverse()); // REVERSA EL ORDEN DE LOS ELEMENTOS DEL ARRAY
// console.log(arr6.sort((a, b) => b - a)); // ORDENA LOS ELEMENTOS DEL ARRAY
// console.log(arr6.indexOf(12)); // BUSCA EL INDICE DE UN ELEMENTO DEL ARRAY // devuelve indice 2
// console.log(arr6.includes(3)); // BUSCA SI UN ELEMENTO ESTA EN EL ARRAY // entrega true o false
// console.log(arr6.join()); // UNE LOS ELEMENTOS DEL ARRAY EN UN STRING (NO SE SUELE USAR COMUNMENTE)
// console.log(arr2.concat(arr6)); // UNE LOS ARRAYS EN UN NUEVO ARRAY
// console.log(arr6.slice(1, 3)); // CORTA UN SUBARRAY DEL ARRAY
// console.log(arr2.length); // MUESTRA EL TAMAÑO DEL ARRAY

// console.log(arr6.map((n) => n));
// const productos

//productos.map((producto) => console.log(producto));
// console.log(arr6.map((numero) => numero + 1)); // devuelve array con valores + 1
// console.log(arr6.every((n) => n > 2)); // devuelve true si todos los elementos del array son mayores a 2
// console.log(arr6.some((n) => n === 12)); // devuelve true o false segun la condicion

// for (let i = 0; i < arr6.length; i++) {
//   console.log("con el for", arr6[i]);
// }

// const tabla = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(tabla.map((n) => `2 * ${n} = ${n * 2}`));

// const string = "ana";

// const espalindromo = string.split("").reverse().join("");

// console.log(string === espalindromo);
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

// LOOPS

const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const alfabeto = ["a", "b", "c", "d"];

// OBJETOS

// objetos = { keys: values, keys: value}

const objeto1 = { name: "David", edad: 26, profesion: "Desarrollador" };

// console.log(objeto1.profesion);

const objeto2 = { name: "David", edad: 26, profesion: "Desarrollador" };

const objeto3 = { num: 0, num2: 0, num3: 0 };
// METODOS DE OBJETOS

// [[num: 0], [num2: 0], [num3: 0]]; ENTRIES

// [0, 0, 0] VALUES

// [num, num2, num3] KEYS

// console.log(Object.values(objeto3).every((el, i) => el === 0));

objeto3.nombre = "Carlos";

// console.log(objeto3);
// ESTE METODO PUEDE SERVIR PARA VERIFICAR FORMULARIOS

// FOR

// for (let i = 0; i < newArray.length; i++) {
//   console.log(newArray[i]);
// }

// FOR EACH

// const iteration = newArray.forEach((element) => console.log(element + 1));

// DO WHILE

// while (newArray.length > 0) {
//  console.log(newArray.pop())
// }

///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTIONS
miprimeraFuncion();

function miprimeraFuncion() {
  console.log("Hola mundo");
}

const funcionFlecha = () => {
  console.log("Hola mundo en flecha");
};

funcionFlecha();

const variable2 = "Ivan";
let variable3 = "";

const newFunction = function () {
  // variable3 = "Carlos";
  // const variable2 = "David";
  // return variable2;
  // console.log(variable2);
  // return 1234;
};
// console.log(newFunction());
// console.log(variable3);

const arrowFunction = ({ dividendo, divisor, multiplicador }) => {
  // const multiplicacion = numero1 * numero2;
  const division = dividendo / divisor;
  const resultado = division * multiplicador;
  // const suma = frase + (numero1 + numero2);
  return resultado;
};

// console.log(arrowFunction({ divisor: 2, dividendo: 10, multiplicador: 3 }));

// CONDICIONALES

// IF ELSE

// if (num > num2) {
//   console.log("num es mayor que num2");
// } else {
//   console.log("no es mayor");
// }

// TERNARIAS

// a > b ? a / b : "A es menor que B";

const funcionFlecha2 = (a, b) => {
  if (a > b) return a / b;

  return "A es menor que B";
  // return a > b ? a / b : "A es menor que B";
  // if (a > b) {
  //   return a / b;
  // } else {
  //   return "A es menor que B";
  // }
};

// console.log(funcionFlecha2(10, 2));

// const check = (a, b) => {
// try {
//   return a + b; // NaN // NO LO RECOMIENDO !!!!
// } catch (error) {
//   console.log("Error: ", error);
// }
// };

// console.log(check("sajsa", 1));

// const suma = ({ num1: a, num2: b }) => a - b;

// console.log(suma({ num2: 4, num1: 2 }));

// const checkIfNumber = (number) => {
//   if (typeof number !== number) {
//     return "El dato no es un numero";
//   }
// };

// const negativeToPositive = (number) => {
//   return checkIfNumber(number);
// return number * -1;
// };

// console.log(negativeToPositive("Hola"));

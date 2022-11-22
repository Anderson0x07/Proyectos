/**
 * Escribir un programa que pregunte el nombre completo del usuario en la consola y 
 * después muestre por pantalla el nombre completo del usuario tres veces, una con 
 * todas las letras minúsculas, otra con todas las letras mayúsculas y otra solo con 
 * la primera letra del nombre y de los apellidos en mayúscula. El usuario puede 
 * introducir su nombre combinando mayúsculas y minúsculas como quiera.
 */
function punto1() {
    console.log(`--- Punto 1 ---`)
    const prompt = require("prompt-sync")({ sigint: true });
    let min, may, npropios;
    let nombre = prompt("Digite su nombre completo: ");

    min = nombre.toLowerCase();
    may = nombre.toUpperCase();
    indice = nombre.valueOf();
    npropios = min.replace(/\b\w/g, l => l.toUpperCase());

    console.log(`Nombre minuscula: ${min}\nNombre mayuscula: ${may}\nNombre propio: ${npropios}`);
}

/**
 * Escribir un programa que pregunte el nombre del usuario en la consola y después 
 * de que el usuario lo introduzca muestre por pantalla <NOMBRE> tiene <n> letras, 
 * donde <NOMBRE> es el nombre de usuario en mayúsculas y <n> es el número de letras 
 * que tienen el nombre.
 */
function punto2() {
    console.log(`\n--- Punto 2 ---`)
    const prompt = require("prompt-sync")({ sigint: true });
    let may;
    let nombre = prompt("Digite su nombre: ");

    may = nombre.toUpperCase();

    console.log(`Nombre: ${may} tiene ${may.length} letras...`);
}

/**
 * Los teléfonos de una empresa tienen el siguiente formato prefijo-número-extension 
 * donde el prefijo es el código del país +34, y la extensión tiene dos dígitos 
 * (por ejemplo +34-913724710-56). Escribir un programa que pregunte por un número 
 * de teléfono con este formato y muestre por pantalla el número de teléfono sin el 
 * prefijo y la extensión.
 */
function punto3() {
    console.log(`\n--- Punto 3 ---`)
    const prompt = require("prompt-sync")({ sigint: true });
    let telefono = prompt("Digite el telefono con formato (+34-XXXXXXX-XX): ");

    //let array = telefono.split("-");

    console.log(`Número de telefono: ${telefono.slice(4, telefono.length - 3)}`);
}

/**
 * Escribir un programa que pida al usuario que introduzca una frase en la consola y 
 * muestre por pantalla la frase invertida.
 */
function punto4() {
    console.log(`\n--- Punto 4 ---`)
    const prompt = require("prompt-sync")({ sigint: true });
    let frase = prompt("Introduzca una frase: ");

    let fraseInver = frase.split("").reverse().join("");


    console.log(`Frase invertida: ${fraseInver}`);
}

/**
 * Escribir un programa que pida al usuario que introduzca una frase en la consola 
 * y una vocal, y después muestre por pantalla la misma frase pero con la vocal 
 * introducida en mayúscula.
 */
function punto5() {
    console.log(`\n--- Punto 5 ---`)
    const prompt = require("prompt-sync")({ sigint: true });

    let frase = prompt("Introduzca una frase: ");
    let vocal = prompt("Introduzca una vocal: ");

    let resultado = frase.toLowerCase().replaceAll(vocal.toLowerCase(), vocal.toUpperCase());


    console.log(`Frase con reemplazo: ${resultado}`);
}

/**
 * Escribir un programa que pregunte el correo electrónico del usuario en la consola
 * y muestre por pantalla otro correo electrónico con el mismo nombre (la parte delantera de la arroba @) 
 * pero con dominio ceu.es.
 */
function punto6() {
    console.log(`\n--- Punto 6 ---`)
    const prompt = require("prompt-sync")({ sigint: true });

    let email = prompt("Introduzca el correo electrónico: ");

    let mitad = email.split('@');

    let dominio = mitad[1].toString().replace(mitad[1].toString(), 'ceu.es');

    console.log(`Nuevo correo electronico: ${mitad[0]}@${dominio}`);
}

/**
 * Escribir un programa que pregunte al usuario la fecha de su nacimiento en formato dd/mm/aaaa 
 * y muestra por pantalla, el día, el mes y el año. Adaptar el programa anterior para que 
 * también funcione cuando el día o el mes se introduzcan con un solo carácter.
 */
function punto7() {
    console.log(`\n--- Punto 7 ---`)
    const prompt = require("prompt-sync")({ sigint: true });

    let fechaN = prompt("Introduzca su fecha de nacimiento con formato 'dd/mm/aaaa': ");

    let res = fechaN.split('/');


    console.log(`Fecha de nacimiento: ${res[0]} de ${res[1]} de ${res[2]}`);
}

/**
 * Escribir un programa que pregunte por consola por los productos de una cesta de la compra, 
 * separados por comas, y muestre por pantalla cada uno de los productos en una línea distinta.
 */
function punto8() {
    console.log(`\n--- Punto 8 ---`)
    const prompt = require("prompt-sync")({ sigint: true });

    let productos = prompt("Introduzca los productos de la cesta de la compra separando por (,): ");

    let res = productos.split(',');

    res.forEach(element => console.log(element));

    //res.map(element => console.log(element));  --> Otra Forma.

}

/**
 * Que lea una oración desde el teclado y determine cuántas palabras tiene la oración.
 */
function punto9() {
    console.log(`\n--- Punto 9 ---`)
    const prompt = require("prompt-sync")({ sigint: true });

    let oracion = prompt("Introduzca una oración: ").replace(/\s+/g," ");

    let palabras = oracion.split(" ");

    console.log(`La oracion tiene ${palabras.length} palabras`);
}

/**
 * Crear Función que determine si un string numérico es capicua EJ: “12321”
 */
function punto10(numero) {
    console.log(`\n--- Punto 10 ---\nNúmero introducido: ${numero}`)
    let numInver = numero.split("").reverse().join("");
    (numInver == numero) ? console.log(`El número ${numero} si es capicua`) : console.log(`El numero ${numero} no es capicua`)
}

//PRUEBAS
punto1();
punto2();
punto3();
punto4();
punto5();
punto6();
punto7();
punto8();
punto9();
let numero = "12321"
punto10(numero);

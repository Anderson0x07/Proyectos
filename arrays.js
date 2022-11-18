/**
 * Crea un array o arreglo unidimensional con un tamaño de 5, asignar los valores numéricos 
 * manualmente (los que tu quieras) y mostrarlos por pantalla.
 */
function punto1(){
    let array = Array(5);

    array[0] = 9;
    array[1] = 8;
    array[2] = 7;
    array[3] = 6;
    array[4] = 5;
    console.log(`--- Punto 1 ---\nArreglo de tamaño ${array.length} de numeros: ${array}`)

    console.log(array)
}

/**
 * Crea un array o arreglo unidimensional con un tamaño de 10, inserta los valores numéricos 
 * que desees de la manera que quieras y muestra por pantalla la media de valores del array.
 */
function punto2(){
    let array = Array.from({length: 10}, (_v,num) => num*2)
    console.log(`--- Punto 2 ---\nArreglo de numeros: ${array}`)

    let suma = array.reduce((acu, sig) => sig += acu ,0);
    var promedio = suma / array.length;

    console.log(`El promedio del arreglo es: ${promedio}`);
    
}

/**
 * Buscar un elemento dentro de un arreglo que nosotros le pedimos por teclado. 
 * Indicar las posición donde se encuentra. Si hay más de uno, indicar igualmente la posición.
 */
function punto3(){

}

/**
 * Suponga un array con N notas de 0 a 20, calcule el promedio de aprobados 
 * y el promedio de los desaprobados e indique la cantidad de aprobados y desaprobados.
 */
function punto4(notas){
    console.log(`--- Punto 4 ---\nArreglo de notas: ${notas}`)
    let apro = [], desap = [];

    notas.forEach(element => (element>10) ? apro.push(element) : desap.push(element));

    let promApro = apro.reduce((acu, sig) => sig += acu ,0) / apro.length;
    let promDesapro = desap.reduce((acu, sig) => sig += acu ,0) / desap.length;


    console.log(`Promedio de aprobados: ${Math.round(promApro)}`)
    console.log(`Promedio de desaprobados: ${Math.round(promDesapro)}`)
    console.log(`Cantidad de aprobados: ${apro.length}`)
    console.log(`Cantidad de desaprobados: ${desap.length}`)
}

/**
 * Dado un vector de enteros, comprobar el mayor, el menor y por último
 * la media de todos.
 */
function punto5(vector){
    console.log(`--- Punto 5 ---\nVector de números: ${vector}`)

    let maximos = vector.filter(element => element == Math.max(...vector));
    let minimos = vector.filter(element => element == Math.min(...vector));

    let suma = vector.reduce((acu, sig) => sig += acu ,0);
    let promedio = suma / vector.length;

    console.log(`El(los) mayores del vector son: ${maximos}`)
    console.log(`El(los) menores del vector son: ${minimos}`)
    console.log(`El promedio del vector es: ${Math.round(promedio)}`);

}

/**
 * ingresa un string de números del cual debes separar todos los números
 * con una coma (,) y formar un array con sus valores.
 */
function punto6(numeros){
    console.log(`--- Punto 6 ---\nString de números: ${numeros}`)
    let msg = numeros.split('').toString();
    console.log(`String de números separado por (','): ${msg}`)

    let array = [];
    array = msg.split(',');

    return array;
}

/**
 * Recibes un Array de números y debes retornar un Array en donde cada número 
 * sea multiplicado por dos (Utilizar métodos de array). 
 */
function punto7(numeros){
    console.log(`--- Punto 7 ---\nArreglo inicial de números: ${numeros}`)
    let retorno = numeros.map(element => element * 2);

    return retorno;
}

/**
 * Suponga un array con N números enteros generados aleatoriamente y mostrados en 
 * pantalla, N debe ser un número impar, mostrar en pantalla el valor que ocupa el centro del array.
 */
function punto8(tam){
    console.log(`--- Punto 8 ---\nTamaño del arreglo: ${tam}`)
    if(tam %2 !=0) {
        ran = [...new Array(tam)].map(() => Math.floor(Math.random() * 20) + 1);

        console.log(`Arreglo generado: ${ran}`)
        console.log(`Valor del centro del array: ${ran[(tam-1)/2]}`)

    } else{
        console.log("Error, tamaño de arreglo debe ser impar.")
    }
    
}

/**
 * Queremos guardar los nombres y las edades de los alumnos de un curso. Realiza un programa que introduzca 
 * el nombre y la edad de cada alumno. El proceso de lectura de datos terminará cuando se introduzca como 
 * nombre un asterisco (*) Al finalizar se mostrará los siguientes datos:
 *    -   Todos los alumnos mayores de edad.
 *    -   Los alumnos mayores (los que tienen más edad)
 */
function punto9(){
    console.log("--- Punto 9 ---")

    const prompt = require("prompt-sync")({ sigint: true });

    function Alumno(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    let alumnos = [];

    let nombre,edad;

    while(nombre != '*'){

        nombre = prompt("Escriba su nombre: ");
        edad = prompt("Escriba su edad: ");

        let alumno = new Alumno(nombre,edad)
        alumnos.push(alumno);
        

    }

    console.log(alumnos);
    
}

/**
 * Diseñar el algoritmo correspondiente a un programa, que:
 *    -  Crea una tabla bidimensional de longitud 5x5 y nombre ‘matriz’.
 *    -  Carga la tabla con valores numéricos enteros.
 *    -  Suma todos los elementos de cada fila y todos los elementos de cada columna visualizando los resultados en pantalla.
 */
function punto10(){

}

/**
 * Crea un array o arreglo unidimensional donde tu le indiques el tamaño por teclado y crear una función que rellene el array 
 * o arreglo con los múltiplos de un número pedido por teclado. Por ejemplo, si defino un array de tamaño 5 y elijo un 3 en 
 * la función, el array contendrá 3, 6, 9, 12, 15. Mostrarlos por pantalla usando otra función distinta.
 */
function punto11(){

}


//PRUEBAS
punto1();
punto2();
let notas = [1,20,15,0,6,7,5,8,11,12,17,16,0,14];
punto4(notas)
let vector = [1,5,9,4,6,2,9];
punto5(vector);

console.log(`String convertido a Array: ${punto6("526489")}`)

let numeros = [1,2,3];
console.log(`Arreglo multiplicado: ${punto7(numeros)}`)

punto8(7);

punto9();
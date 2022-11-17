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

function punto2(){
    let array = Array.from({length: 10}, (_v,num) => num*2)
    console.log(`--- Punto 2 ---\nArreglo de numeros: ${array}`)

    let suma = array.reduce((acu, sig) => sig += acu ,0);
    var promedio = suma / array.length;

    console.log(`El promedio del arreglo es: ${promedio}`);
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

    let array = msg.split(',');
    console.log(array)
}

punto1();
punto2();
let notas = [1,20,15,0,6,7,5,8,11,12,17,16,0,14];
punto4(notas)
let vector = [1,5,9,4,6,2,9];
punto5(vector);
punto6("526489");
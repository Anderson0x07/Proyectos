/**
 * Crea una clase Cuenta con los métodos ingreso, reintegro y transferencia. La clase contendrá un 
 * constructor por defecto y los métodos getters y setters.
 */
function punto1() {
    const prompt = require("prompt-sync")({ sigint: true });
    console.log(`\n--- Punto 1 ---`);

    class Cuenta{
        constructor(ingreso, reintegro, transferencia){
            this._ingreso = ingreso;
            this._reintegro = reintegro;
            this._transferencia = transferencia;
        }
    
        get ingreso(){
            return this._ingreso;
        }
        set ingreso(ingreso){
            this._ingreso = ingreso;
        }
    
        get reintegro(){
            return this._reintegro;
        }
        set reintegro(reintegro){
            this._reintegro = reintegro;
        }
    
        get transferencia(){
            return this._transferencia;
        }
        set transferencia(transferencia){
            this._transferencia = transferencia;
        }
    
        toString(){
            return `Cuenta:\n - Ingreso: ${this._ingreso}\n - Reintegro: ${this._reintegro}\n - Transferencia: ${this._transferencia}`;
        }
    }

    let ingreso = prompt("Digite el ingreso: ");
    let reintegro = prompt("Digite el reintegro: ");
    let transferencia = prompt("Digite la tranferencia: ");
    
    const cuenta = new Cuenta(ingreso,reintegro,transferencia);
    console.log(cuenta.toString());

    //SET DE TODA LA CUENTA
    cuenta.ingreso = prompt("Actualizar el ingreso, digite nuevo valor: ");
    cuenta.reintegro = prompt("Actualizar el reintegro, digite nuevo valor: ");
    cuenta.transferencia = prompt("Actualizar la transferencia, digite nuevo valor: ");

    console.log("Nueva "+cuenta.toString());
}
punto1();

/**
 * Crea una clase Contador con los métodos para incrementar y decrementar el contador. La clase 
 * contendrá un constructor por defecto y los métodos getters y setters.
 */
function punto2(){
    const prompt = require("prompt-sync")({ sigint: true });
    console.log(`\n--- Punto 2 ---`);

    class Contador{
        constructor(numero){
            this._numero = numero;
        }
    
        get numero () {
            return this._numero;
        }
    
        set numero (num) {
            this._numero = num;
        }
    
        incrementar(){
            this._numero++;
        }
    
        decrementar(){
            this._numero--;
        }
    }

    let num = prompt("Digite un número para iniciar el contador: ");

    if(!isNaN(num)){
        const contador = new Contador(num);

        contador.incrementar();
        console.log(`Contador incrementado: ${contador.numero}`);
        contador.incrementar();
        console.log(`Contador incrementado: ${contador.numero}`);

        contador.decrementar();
        console.log(`Contador decrementado: ${contador.numero}`);

    } else {
        console.log("Error, dato introducido no es númerico.")
    }
}
punto2();

/**
 * Crea una clase llamada Cuenta que tendrá los siguientes atributos: titular y cantidad (puede tener decimales).
 * El titular será obligatorio y la cantidad es opcional. Crea dos constructores que cumplan lo anterior.
 * 
 * Crea sus métodos get, set y toString.
 *  Tendrá dos métodos especiales:
 *      - ingresar(double cantidad): se ingresa una cantidad a la cuenta, si la cantidad 
 *        introducida es negativa, no se hará nada.
 *      - retirar(double cantidad): se retira una cantidad a la cuenta, si restando la cantidad 
 *        actual a la que nos pasan es negativa, la cantidad de la cuenta pasa a ser 0.
 */
function punto3(){
    const prompt = require("prompt-sync")({ sigint: true });
    console.log(`\n--- Punto 3 ---`);

    class Cuenta {

        /**
         * @param {string} titular
         */
        constructor(titular){
            this._titular = titular;
        }

        /**
         * @param {string} titular  
         * @param {double} cantidad
         */
        constructor(titular, cantidad){
            this._titular = titular;
            this._cantidad = cantidad;
        }

            
        /**
         * @return {string}
         */
        get titular(){
            return this._titular;
        }
        /**
         * @param {string} titular
         */
        set titular2(titular){
            this._titular = titular;
        }

        /**
         * @return {double}
         */
        get cantidad(){
            return this._cantidad;
        }

        /**
         * @param {double} cantidad
         */
        set cantidad(cantidad){
            this._titular = cantidad;
        }

        toString(){
            return `Cuenta{ Titular= ${this._titular}, Cantidad= ${this._cantidad} }`;
        }

        /**
         * @param {double} cantidad
         */
        ingresar(cantidad){
            if(cantidad<=0){
                return;
            }
            this.cantidad += cantidad;
        }

        /**
         * @param {double} cantidad
         */
        retirar(cantidad){
            if(cantidad<=0){
                return;
            } else if(this.cantidad-cantidad < 0){
                this.cantidad = 0;
            } else {
                this.cantidad -= cantidad;
            }
        }
    }

    let titular = prompt("Escriba el nombre del titular: ");
    let cantidad = prompt("Digite la cantidad de la cuenta: ")

    if(!isNaN(cantidad)){
        const cuenta = new Cuenta(titular);


        contador.incrementar();
        console.log(`Contador incrementado: ${contador.numero}`);
        contador.incrementar();
        console.log(`Contador incrementado: ${contador.numero}`);

        contador.decrementar();
        console.log(`Contador decrementado: ${contador.numero}`);

    } else {
        console.log("Error, dato introducido no es númerico.")
    }

    const cuenta = new Cuenta();
}

/**
 * Realizar un programa que conste de una clase llamada Alumno que tenga como atributos el nombre y 
 * la nota del alumno. Definir los métodos para inicializar sus atributos, imprimirlos y mostrar un 
 * mensaje con el resultado de la nota y si ha aprobado o no.
 */
function punto4(){

}

/**
 * Realizar un programa que tenga una clase Persona con las siguientes características. 
 * La clase tendrá como atributos el nombre y la edad de una persona. Implementar los métodos 
 * necesarios para inicializar los atributos, mostrar los datos e indicar si la persona es mayor de edad o no.
 */
function punto5(){

}

/**
 * Desarrollar un programa que cargue los datos de un triángulo. Implementar una clase con los métodos para 
 * inicializar los atributos, imprimir el valor del lado con un tamaño mayor y  el tipo de triángulo que es 
 * (equilátero, isósceles o escaleno).
 */
function punto6(){

}

/**
 * Realizar una clase que administre una agenda. Se debe almacenar para cada contacto el nombre, el teléfono 
 * y el email. Además deberá mostrar un menú con las siguientes opciones:
 *  - Añadir contacto
 *  - Lista de contactos
 *  - Buscar contacto
 *  - Editar contacto
 *  - Cerrar agenda
 */
function punto7(){

}

/**
 * Realizar un programa en el cual se declaran dos valores enteros por teclado utilizando el método constructor. 
 * Calcular después la suma, resta, multiplicación y división. Utilizar un método para cada una e imprimir 
 * los resultados obtenidos. Llamar a la clase Calculadora.
 */

class Calculadora {
    constructor (a, b) {
      this.a = a;
      this.b = b;
    }

    get suma() {
       return this.a+this.b;
    }

    get resta() {
        return this.a-this.b;
    }

    get multiplicacion() {
        return this.a*this.b;
    }

    get division() {
        return this.a/this.b
    }
}
function punto8(){
    const prompt = require("prompt-sync")({ sigint: true });
    console.log(`--- Punto 8 ---`);

    let a = prompt("Digite el primer número: ");
    let b = prompt("Digite el segundo número: ");

    if(!isNaN(a) && !isNaN(b)){
        const resultado = new Calculadora(a,b);

        console.log(`Suma de ${a} + ${b} = ${resultado.suma}
        Resta de ${a} - ${b} = ${resultado.resta}
        Multiplicacion de ${a} * ${b} = ${resultado.multiplicacion}
        Division de ${a} / ${b} = ${resultado.division}`);
    } else{
        console.log("Error dato(s) no númericos.")
    }
}
punto8();


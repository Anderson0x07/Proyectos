//ARREGLO DE PERSONAS
let personas = [];



//RELLENA ARRAY CON DOS PERSONAS
function rellenarArray(){
    let persona1 = {
        "nombre" : "anderson",
        "edad" : "17"
    };
    let persona2 = {
        "nombre" : "adrian",
        "edad" : "23"
    };
    let persona3 = {
        "nombre" : "pedro",
        "edad" : "20"
    };
    let persona4 = {
        "nombre" : "juan",
        "edad" : "15"
    };

    personas.push(persona1, persona2, persona3, persona4);
}

//LISTAR ARREGLO DE PERSONAS
function listarArray(personas){
    personas.forEach(per => {
        console.log(per);
    });
    
}

//PARA CAMBIAR LAS LETRAS A POR X EN LOS NOMBRES DE LAS PERSONAS
function cambioLetras(){
    let nuevoArray = new Array();

    nuevoArray = personas;

    for(var i=0; i<nuevoArray.length;i++){
        nuevoArray[i].nombre = nuevoArray[i].nombre.replace('a','x');
        
    }

    return nuevoArray;
}

//AGREGA ATRIBUTO MAYOR DE EDAD AL ARREGLO DE PERSONAS
function addNuevoAtributo(){
    let nuevoArray = new Array();

    nuevoArray = personas;

    for(var i=0; i<nuevoArray.length;i++){
        if(nuevoArray[i].edad >= 18){
            nuevoArray[i].mayor_de_edad = true;
        } else{
            nuevoArray[i].mayor_de_edad = false;
        }
    }

    return nuevoArray;
}

//OBTIENE LOS DATOS DE LA ULTIMA PERSONA EN EL LISTADO
function lastItem(){
    return personas[personas.length-1]
}

//VERIFICA LA EXISTENCIA DE UNA PERSONA POR SU NOMBRE
function existe(nombre){
    var rta=false;
    var result = personas.find(persona => persona.nombre === nombre);

    if(result != undefined){
        rta= true;
    }

    return rta;
    

}

console.log("---Se rellena el arreglo---")
rellenarArray();
console.log("-------------------")
console.log("---Listado de personas---")
listarArray(personas);
console.log("-------------------")
console.log("---Buscar persona por su nombre---")
let nombre = "anderson";
console.log(nombre + " existe ? "+existe(nombre))
console.log("-------------------")
console.log("---Cambiando a por x---")
personas = cambioLetras();
listarArray(personas);
console.log("-------------------")
console.log("---Agregando nuevo atributo---")

personas = addNuevoAtributo();
listarArray(personas);
console.log("-------------------")
console.log("Ultimo item: ")
console.log(lastItem())







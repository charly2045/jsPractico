// Pregunta 3 variables

var nombre = "Carlos";
var apellido = "Quintana";
var usuarioPlatzi = "charly2045";
var edad = 43;
var email = "charly2045@gmail.com";
var mayorEdad = true;
var dineroAhorrado = 1000;
var deudas = 500;

// Pregunta 4 variables

var nombreCompleto = nombre + "" + apellido;

// Pregunta 2 Funciones

// const name = "Juan David";
// const lastname = "Castro Gallego";
// const completeName = name + lastname;
// const nickname = "juandc";


function Presentation(name, lastname, nickname) {
    var completeName = name + " " + lastname;

    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

// Pregunta 2 Condicionales

// const tipoDeSuscripcion = "Basic";

// switch (tipoDeSuscripcion) {
//    case "Free":
//        console.log("Solo puedes tomar los cursos gratis");
//        break;
//    case "Basic":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
//        break;
//    case "Expert":
//        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
//        break;
//    case "ExpertPlus":
//        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
//        break;
// }

var tipoDeSuscripcion = "Basic";

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

// Pergunta 2 Ciclos

/* for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
} */

var numero = 0;

while (numero < 5) {
    console.log("El valor de numero es: " + numero);
    numero++;
}

/* for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
} */

var numero = 10;

while (numero >= 2) {
    console.log("El valor de numero es: " + numero);
    numero--;
}

// Pergunta 3 Ciclos

function Pregunta() {

    var option = prompt("Cual es el resultado de 2 + 2?");
    
    if (option == 4) {
        console.log("Felicidades, has acertado!");
    } else {
        console.log("No es correcto, vuelvelo a intentar");
        Pregunta();
    }
}

// Pregunta 2 Listas

var numeros = [1, 2 , 3 , 4 , 6];

function FirstNumber (num) {
    console.log(num[0]);
}

// Pregunta 3 Listas

var numeros = [1, 2 , 3 , 4 , 6];

function PrintArray (array) {
    for (var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// Pregunta 4 Listas

var miAuto = {
    marca: "Toyota", 
    modelo: "Corolla",
    annio: 2020,
}

function PrintObject (object) {
    for (var items in object){
        console.log(items);
    }
}
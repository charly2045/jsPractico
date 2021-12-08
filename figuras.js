// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}
function calcularPerimetroTriangulo() {
  const input = document.getElementById("InputTriangulo1");
  const value = Number(input.value);
  const input2 = document.getElementById("InputTriangulo2");
  const value2 = Number(input2.value);
  const input3 = document.getElementById("InputTriangulo3");
  const value3 = Number(input3.value);

  const perimetro = perimetroTriangulo(value, value2, value3);
  alert(perimetro);
}
function calcularAreaTriangulo() {
  const input = document.getElementById("InputTrianguloBase");
  const value = Number(input.value);
  const input2 = document.getElementById("InputTrianguloAltura");
  const value2 = Number(input2.value);

  const area = areaTriangulo(value, value2);
  alert(area);
}
function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}

// Pendiente de terminar

/* function calcularPerimetroTrianguloIsosceles() {
  const input = document.getElementById("InputTrianguloIsosceles1");
  const value = Number(input.value);
  const input2 = document.getElementById("InputTrianguloIsosceles2");
  const value2 = Number(input2.value);
  const input3 = document.getElementById("InputTrianguloIsosceles3");
  const value3 = Number(input3.value);
  if (value != value2 ) {
    alert("Dos de los lados tiene que ser iguales para que sea un triangulo isosceles")
  } else {
    const perimetro = perimetroTriangulo(value, value2, value3);
    alert(perimetro);
  }
}
function calcularAreaTrianguloIsosceles() {
  const input = document.getElementById("InputTrianguloIsoscelesBase");
  const value = Number(input.value);
  const input2 = document.getElementById("InputTrianguloIsoscelesAltura");
  const value2 = Number(input2.value);

  const area = areaTriangulo(value, value2);
  alert(area);
} */

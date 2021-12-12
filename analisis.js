function esPar(numero){
    // forma mas abreviada sin los if
    return (numero % 2 === 0);
}

function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
      function (valorAcumulado = 0, nuevoElemento) {
        return valorAcumulado + nuevoElemento;
      }
    );
  
    const promedioLista = sumaLista / lista.length;
  
    return promedioLista;
}

function medianaSalarios(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);

        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
const salariosSp = spain.map(function(elemento){
    return elemento.salary;

});

const salariosSpOrdenada = salariosSp.sort(function(salaryA, salaryB){
    return salaryA - salaryB;
});

const medianaGeneralSpain = medianaSalarios(salariosSpOrdenada);

const spliceStart = (salariosSpOrdenada.length * 90) / 100;
const spliceCount = salariosSpOrdenada.length - spliceStart;

const salariosTop10 = salariosSpOrdenada.splice(spliceStart, spliceCount);

const medianaTop10Spain = medianaSalarios(salariosTop10);

// Llamamos a la función salariosMediada con la lista de salarios ordenada como argumento

console.log(medianaGeneralSpain, medianaTop10Spain);

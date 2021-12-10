const salariosSp = spain.map(function(elemento){
    return spain.salary;

});

const salariosSpOrdenada = salariosSp.sort(function(salaryA, salaryB){
    return salaryA - salaryB;
})

function salariosMediana(lista) {
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {

    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }


}

function esPar(numero){
    // forma mas abreviada sin los if
    return (numero % 2 === 0);
}

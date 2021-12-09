const lista1 = [1, 2, 3, 1, 2, 3, 4, 2, 2, 2, 1];

const lista1Count = {};

lista1.map(function(elemento){
    if (lista1Count[elemento]) {
        lista1Count[elemento] += 1;
    } else {
        lista1Count[elemento] = 1;
    }
});

const listaArray = Object.entries(lista1Count).sort(function(elementoA, elementoB){
    /*if (elementoA > elementoB) return 1;
    if (elementoA == elementoB) return 0;
    if (elementoA < elementoB) return -1;*/
    // Manera mas fácil, tambien necesitamos que ordene la segunda posicion de cada array ya que al convertir el objeto en un array se ha convertido en un array que tiene dentro arrays.
    return elementoA[1] - elementoB[1];
});

// La moda es ultimo elemento del array y como los array enpienzan con cero le restamos 1 al total de elementos
const moda = listaArray[listaArray.length -1];
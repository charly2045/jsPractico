const lista1 = [3, 4, 5];

const productoLista1 = lista1.reduce(function(elemento1 = 0, elemento2){
    return elemento1 * elemento2;
})

const promedioGeo = Math.cbrt(productoLista1);


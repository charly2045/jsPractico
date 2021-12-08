// const precioOriginal = 120;
// const descuento = 18;

var cuponDiscount = [10, 20 , 30 , 40 , 50 ];

var cuponDiscountRandom = Math.floor(Math.random()* cuponDiscount.length);


var cuponValue = cuponDiscount[cuponDiscountRandom];

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento - cuponValue;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}


function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;
  
  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue);

  const resultP = document.getElementById("ResultP");
  resultP.innerText = "Has conseguido un cupon descuento adicional de " + cuponValue + "%! y el precio es: " + precioConDescuento + "€";
}



// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });


# CallBack
- Lista de productos en la tienda
let products = [
  { id: 1, name: "Zapatos de skate ", price: 17.29 },
  { id: 2, name: "Zapatillas de Skate MAINALUN ", price: 29.89 },
  { id: 3, name: "Zapatos de skateboarding", price: 45.00 }
];

- Aplicar un descuento del 10% a cada producto
let discountedProducts = products.map((product) => {
  let discountedPrice = product.price * 0.9; // Aplicar el 10% de descuento
  return { ...product, price: discountedPrice.toFixed(2) };
});

console.log(discountedProducts);
console.log(products);

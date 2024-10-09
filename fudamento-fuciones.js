//Variables
 var precio=17
 let precio1=15.25
 let Proveedor ="MAINALUN SHOES WW"
 let disponible =True
 let agotado = 0; //underfined
 let busqueda =null
 let carritotienda ='carrito'
  
 //CallBack
// Lista de productos en la tienda
let products = [
    { id: 1, name: "Zapatos de skate ", price: 17.29 },
    { id: 2, name: "Zapatillas de Skate MAINALUN ", price: 29.89 },
    { id: 3, name: "Zapatos de skateboarding", price: 45.00 }
  ];
  
  // Aplicar un descuento del 10% a cada producto
  let discountedProducts = products.map((product) => {
    let discountedPrice = product.price * 0.9; // Aplicar el 10% de descuento
    return { ...product, price: discountedPrice.toFixed(2) }; // Formatear el precio con dos decimales
  });
  
  console.log(discountedProducts);
  console.log(products);
  

 //Retorno
 function stocktennis(){
    return "Quedan 4 " 
 }
 console.log(stocktennis());

 function preciotennis(){
    return "Precio 40.50 " 
 }
 console.log(preciotennis ());


 function nombretennis(){
    return "Jordan" 
 }
 console.log(nombretennis ());

 //Objectos
 const tennis = {
    name: "Skate",
    pares: 1,
    address: {
    fabricados: "china",
    precio: "20.59"
    },
    color: ['negro','blanco '],
    disponibles: true          
 }
 console.log(tennis);

 //Argumentos

 const validarcodigodescuento = function(boleto,descuento){
 console.log(`El descuento ${descuento} a los tennis son Skate`);
 }
validarcodigodescuento ("154515154", "10€")
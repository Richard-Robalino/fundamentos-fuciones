![image](https://github.com/user-attachments/assets/92c52d3a-3454-4ede-aca3-329d6f57f768)
# Spread
# Usaremos el operador spread para agregar productos al carrito de compras sin modificar el carrito

 * const carritoDeCompras = ['Zapatillas', 'Camiseta', 'Reloj'];
 * const nuevoCarritoDeCompras = [...carritoDeCompras, 'Bolso', 'Lentes de sol'];
 * console.log(nuevoCarritoDeCompras); 
 
# Rest

* function crearProducto(nombre, precio, ...atributos) {
*    return {
*  nombre,
*  precio,
*  atributos
*    };
* }

* const nuevoProducto = crearProducto('Zapatos', 49.99, 'Color: Negro', 'Talla: 42', 'Material: Cuero');

* console.log(nuevoProducto);
* Output: { nombre: 'Zapatos', precio: 49.99, atributos: ['Color: Negro', 'Talla: 42', 'Material: Cuero'] }

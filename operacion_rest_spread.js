const carritoDeCompras = ['Zapatillas', 'Camiseta', 'Reloj'];


const nuevoCarritoDeCompras = [...carritoDeCompras, 'Bolso', 'Lentes de sol'];

console.log(nuevoCarritoDeCompras); 






function crearProducto(nombre, precio, ...atributos) {
    return {
        nombre,
        precio,
        atributos
    };
}

const nuevoProducto = crearProducto('Zapatos', 49.99, 'Color: Negro', 'Talla: 42', 'Material: Cuero');

console.log(nuevoProducto);



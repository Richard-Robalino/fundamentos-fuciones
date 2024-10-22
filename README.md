![image](https://github.com/user-attachments/assets/92c52d3a-3454-4ede-aca3-329d6f57f768)
# Endpoints
# Obtener todos los productos
# Método: GET
# URL: /api/products
# Descripción: Obtiene la lista de todos los productos disponibles en la tienda.
```javascript
 [
    { "id": 1, "name": "Ropa deportiva", "price": 30.99, "category": "Ropa" },
    { "id": 2, "name": "Smartphone X", "price": 299.99, "category": "Electrónica" },
    { "id": 3, "name": "Taza de café", "price": 5.99, "category": "Hogar" }
 ]
```
# Método: POST
# URL: /api/products
# Descripción: Añade un nuevo producto al catálogo.
# Ejemplo de cuerpo de la solicitud:
```javascript
 {
   "name": "Zapatillas de correr",
    "description": "Zapatillas ligeras y cómodas para correr",
    "price": 45.99,
    "category": "Calzado",
    "stock": 100
 }
```



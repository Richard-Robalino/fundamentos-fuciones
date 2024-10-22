![image](https://github.com/user-attachments/assets/92c52d3a-3454-4ede-aca3-329d6f57f768)



### Ejemplos de `async/await`:

**Conexión a una base de datos externa:**
```javascript
const connectToDatabase = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const connectionSuccess = true; // Simular conexión exitosa
            connectionSuccess ? resolve("Conexión exitosa a la base de datos") : reject("Error de conexión");
        }, 2000);
    });
};

const checkDatabaseConnection = async () => {
    try {
        const result = await connectToDatabase();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};

checkDatabaseConnection();
```

**Obtención de datos de usuarios de una API:**
```javascript
const getUserData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error al obtener los datos:", error);
    }
};

getUserData();
```

---

### Ejemplos de consumo de una API privada :

**Obtener lista de productos desde la API privada de Temu:**
```javascript
const urlProductsAPI = "https://api.temu.com/v1/products";
const apiKey = "YOUR_PRIVATE_API_KEY";

const fetchProducts = async () => {
    try {
        const response = await fetch(`${urlProductsAPI}?api_key=${apiKey}`);
        if (!response.ok) {
            throw new Error("Error al obtener los productos");
        }
        const products = await response.json();
        console.log("Lista de productos:", products);
    } catch (error) {
        console.error("Error en la API de productos:", error);
    }
};

fetchProducts();
```

**Obtener detalles de un producto específico por ID:**
```javascript
const productID = "12345";
const urlProductDetailsAPI = `https://api.temu.com/v1/products/${productID}`;
const apiKey = "YOUR_PRIVATE_API_KEY";

const fetchProductDetails = async () => {
    try {
        const response = await fetch(`${urlProductDetailsAPI}?api_key=${apiKey}`);
        if (!response.ok) {
            throw new Error("Error al obtener los detalles del producto");
        }
        const productDetails = await response.json();
        console.log("Detalles del producto:", productDetails);
    } catch (error) {
        console.error("Error en la API de detalles de producto:", error);
    }
};

fetchProductDetails();
```



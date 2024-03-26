class ProductManager {
    constructor(){
     this.products = [];   
    }
    addProduct(title, description, price, thumbnail,code, stock){
        const id = this.products.length + 1;
        if (!this.products.some(product => product.code === code) && title && description && price && thumbnail && code && stock ) {
            const producto = {
            id: id,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }
        this.products.push(producto);
        }else{
            console.log ("el producto no es valido o el codigo se repite")
        }
    }
    getProducts (){
        return this.products
    }
    getProductById (id){
     const productoEncontrado = this.products.find((prod) => prod.id === id)
     if (!productoEncontrado){
        console.log("Error: Not found, producto no encontrado");
        return
     }
     return productoEncontrado
    }
}

const productManager = new ProductManager();

// Agregar productos
productManager.addProduct("Cafetera", "Cafetera con capacidad de 12 tazas",300, "/imgs/cafetera.jpg", "CAF123", 15);
productManager.addProduct("Tostadora", "Tostadora eléctrica de acero inoxidable", 800, "/imgs/tostadora.jpg", "TST456", 20);

// Obtener todos los productos
console.log("Todos los productos:", productManager.getProducts());

// Obtener un producto por ID
console.log("Producto con ID 1:", productManager.getProductById(1));


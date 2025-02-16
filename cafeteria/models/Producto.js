// Clase base Producto
const IProducto = require('../interfaces/IProduct');
class Producto extends IProducto {
    constructor() {
        super();
        this.descripcion = "Producto Base";
        this.precio = 0;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getPrecio() {
        return this.precio;
    }
}

module.exports = Producto;
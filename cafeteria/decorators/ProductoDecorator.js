// Decorador abstracto
const IProducto = require('../interfaces/IProduct');

class ProductoDecorator extends IProducto {
    constructor(producto) {
        super();
        this.producto = producto;
    }

    getDescripcion() {
        return this.producto.getDescripcion();
    }

    getPrecio() {
        return this.producto.getPrecio();
    }
}

module.exports = ProductoDecorator;
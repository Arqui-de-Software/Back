const { Producto } = require('./productos');

class ProductoDecorator extends Producto {
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

module.exports = { ProductoDecorator };

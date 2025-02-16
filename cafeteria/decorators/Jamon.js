const ProductoDecorator = require('./ProductoDecorator');

class Jamon extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con jamon`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 500;
    }
}

module.exports = Jamon;
const ProductoDecorator = require('./ProductoDecorator');

class Chocolate extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con chocolate`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 1000;
    }
}

module.exports = Chocolate;
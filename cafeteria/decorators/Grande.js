// Decoradores concretos
const ProductoDecorator = require('./ProductoDecorator');

class Grande extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, grande`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 1000;
    }
}

module.exports = Grande;
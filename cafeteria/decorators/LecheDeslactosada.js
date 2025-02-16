const ProductoDecorator = require('./ProductoDecorator');

class LecheDeslactosada extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con leche deslactosada`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 1000;
    }
}

module.exports = LecheDeslactosada;
const ProductoDecorator = require('./ProductoDecorator');

class Queso extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con queso`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 500;
    }
}

module.exports = Queso;
const ProductoDecorator = require('./ProductoDecorator');

class LecheAlmendras extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con leche de almendras`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 1500;
    }
}

module.exports = LecheAlmendras;
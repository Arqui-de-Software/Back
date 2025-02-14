const { ProductoDecorator } = require('./decorador');

class Grande extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, grande`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 1000;
    }
}

class LecheDeslactosada extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con leche deslactosada`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 1000;
    }
}

class LecheAlmendras extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con leche de almendras`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 1500;
    }
}

class Queso extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con queso`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 500;
    }
}

class Jamon extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con jamon`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 500;
    }
}

class Chocolate extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con chocolate`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 1000;
    }
}

module.exports = { Grande, LecheDeslactosada, LecheAlmendras, Queso, Jamon, Chocolate };

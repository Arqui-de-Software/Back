class Chocolate extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con chocolate`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 1000;
    }
}
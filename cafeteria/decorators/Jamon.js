class Jamon extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, con jamon`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 500;
    }
}
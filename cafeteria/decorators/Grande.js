// Decoradores concretos
class Grande extends ProductoDecorator {
    getDescripcion() {
        return `${this.producto.getDescripcion()}, grande`;
    }

    getPrecio() {
        return this.producto.getPrecio() + 1000;
    }
}

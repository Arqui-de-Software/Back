// Productos concretos
const Producto = require('./Producto');
class Cafe extends Producto {
    constructor() {
        super();
        this.descripcion = "Café";
        this.precio = 5000;
    }
}

module.exports = Cafe;
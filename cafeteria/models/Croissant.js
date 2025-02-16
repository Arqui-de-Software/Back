const Producto = require('./Producto');

class Croissant extends Producto {
    constructor() {
        super();
        this.descripcion = "Croissant";
        this.precio = 6000;
    }
}


module.exports = Croissant;
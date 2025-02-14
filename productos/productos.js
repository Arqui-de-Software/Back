class Producto {
    constructor() {
        this.descripcion = "";
        this.precio = 0;
    }

    getDescripcion() {
        return this.descripcion;
    }

    getPrecio() {
        return this.precio;
    }
}

class Cafe extends Producto {
    constructor() {
        super();
        this.descripcion = "Café";
        this.precio = 5000;
    }
}

class Croissant extends Producto {
    constructor() {
        super();
        this.descripcion = "Croissant";
        this.precio = 6000;
    }
}

module.exports = { Producto, Cafe, Croissant };

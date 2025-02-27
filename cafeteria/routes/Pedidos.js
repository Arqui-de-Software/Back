const express = require('express');
const { Cafe, Croissant } = require('../productos/productos');
const { Leche, Azucar, Chocolate, Queso, Grande, LecheDeslactosada, LecheAlmendras, Jamon } = require('../productos/extras');

const router = express.Router();

router.post("/", (req, res) => {
    const { producto, extras } = req.body;

    let pedido;
    if (producto === "cafe") {
        pedido = new Cafe();
    } else if (producto === "croissant") {
        pedido = new Croissant();
    } else {
        return res.status(400).json({ error: "Producto no válido" });
    }

    if (extras) {
        extras.forEach(extra => {
            switch (extra) {
                case "grande":
                    pedido = new Grande(pedido);
                    break;
                case "lecheDeslactosada":
                    pedido = new LecheDeslactosada(pedido);
                    break;
                case "lecheAlmendras":
                    pedido = new LecheAlmendras(pedido);
                    break;
                case "queso":
                    pedido = new Queso(pedido);
                    break;
                case "jamon":
                    pedido = new Jamon(pedido);
                case "chocolate":
                    pedido = new Chocolate(pedido);
                default:
                    return res.status(400).json({ error: `Extra no válido: ${extra}` });
            }
        });
    }

    res.json({
        descripcion: pedido.getDescripcion(),
        precio: `$${pedido.getPrecio().toFixed()}`
    });
});


module.exports = router;

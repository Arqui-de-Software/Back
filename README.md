# Implementación del Patrón Decorator

## Descripción del Patrón
El patrón **Decorator** es utilizado para extender la funcionalidad de objetos de manera flexible sin modificar su estructura original. Este proyecto demuestra su implementación mediante un ejemplo práctico en **Node.js** utilizando **Express** como framework para la creación de un sistema de pedidos en una cafetería.

---

## Estructura del Proyecto
La estructura del proyecto sigue el estándar de **Node.js**:

```
nombre-del-proyecto
│
├── package.json           # Archivo de configuración de Node.js
├── README.md              # Documentación del proyecto
└── src
    ├── productos
    │   ├── productos.js    # Definición de productos base
    │   ├── extras.js       # Implementación de decoradores
    ├── cafeteria
    │   ├── pedidos.js      # Lógica de pedidos
    ├── server.js          # Servidor principal
```

---

## Dependencias Utilizadas
Este proyecto utiliza las siguientes dependencias definidas en el archivo **package.json**:
```json
{
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

---

## Instrucciones de Instalación

1. **Clonar el repositorio:**
```bash
git clone https://github.com/usuario/nombre_repositorio.git
cd nombre_repositorio
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Ejecutar el proyecto:**
```bash
node src/server.js
```

---

## Ejemplo de Ejecución
Al realizar una petición POST a `/pedidos`, se debe enviar un cuerpo JSON similar a:
```json
{
  "producto": "cafe",
  "extras": ["grande", "chocolate"]
}
```

El resultado esperado será:
```
{
  "descripcion": "Café, grande, con chocolate",
  "precio": "$7000"
}
```

---

## Diagrama UML
El siguiente diagrama muestra la estructura del patrón implementado:

![Diagrama UML](uml/diagrama.png)

---

## Explicación de la Implementación
El patrón **Decorator** ha sido implementado utilizando las siguientes clases principales:
- **Producto**: Clase base para productos.
- **Cafe y Croissant**: Implementaciones concretas de productos.
- **ProductoDecorator**: Clase base para decoradores.
- **Extras (Grande, Chocolate, etc.)**: Decoradores que agregan funcionalidades adicionales.
- **PedidosRouter**: Maneja las solicitudes HTTP para la realización de pedidos.

---

## Contribuciones
Este proyecto fue desarrollado por:
- Rita trindade da Cruz
- Juan Andrés Gómez Pérez
- Brandon Eduardo Merchan


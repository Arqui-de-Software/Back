# 🚀 Implementación del Patrón Decorator

## 📌 Descripción del Patrón
El patrón **Decorator** es un patrón de diseño estructural utilizado para **añadir funcionalidad a objetos de manera dinámica sin modificar su estructura base**. Su principal ventaja es permitir la extensión de funcionalidades sin alterar la implementación original del objeto, fomentando el principio de **abierto/cerrado (Open/Closed Principle) de SOLID**.

Este proyecto implementa el patrón **Decorator** en **JavaScript**, utilizando **Express.js** para gestionar pedidos en una cafetería. 

## 🏗️ Estructura del Proyecto
La estructura del backend sigue una organización modular para mejorar la escalabilidad y mantenibilidad:

```
Back/
│
├── src/
│   ├── cafeteria/
│   │   ├── interfaces/
│   │   │   ├── IProducto.js        # Definición de la interfaz base para los productos
│   │   ├── models/
│   │   │   ├── Producto.js         # Clase base para productos
│   │   │   ├── Cafe.js             # Implementación concreta de un café
│   │   │   ├── Croissant.js        # Implementación concreta de un croissant
│   │   ├── decorators/
│   │   │   ├── ProductoDecorator.js   # Clase abstracta del decorador
│   │   │   ├── Chocolate.js           # Decorador que añade chocolate
│   │   │   ├── LecheDeslactosada.js   # Decorador para leche deslactosada
│   │   │   ├── Grande.js              # Decorador para tamaño grande
│   │   │   ├── Queso.js               # Decorador que añade queso
│   │   │   ├── Jamon.js               # Decorador que añade jamón
│   ├── routes/
│   │   ├── Pedidos.js                 # Definición de rutas API para gestionar pedidos
├── uml/                                # Carpeta con los diagramas UML
│   ├── UML.png                         # Diagrama UML de la implementación
├── README.md                           # Documentación del proyecto
├── package.json                        # Archivo de configuración de Node.js
```

## 📦 Dependencias Utilizadas
Este proyecto utiliza las siguientes dependencias definidas en `package.json`:

```json
{
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

## ⚙️ Instrucciones de Instalación
1. **Clonar el repositorio:**
   ```sh
   git clone https://github.com/Arqui-de-Software/Back.git
   cd Back
   ```

2. **Instalar dependencias:**
   ```sh
   npm install
   ```

3. **Ejecutar el proyecto:**
   ```sh
   node src/server.js
   ```

## 🛠️ Ejemplo de Ejecución
Al realizar una petición `POST` al endpoint de pedidos con el siguiente JSON:
```json
{
  "producto": "cafe",
  "extras": ["chocolate", "lecheDeslactosada"]
}
```
La salida esperada es:
```json
{
  "descripcion": "Café, con chocolate, con leche deslactosada",
  "precio": "$7000"
}
```

## 📊 Diagrama UML
El siguiente diagrama muestra la estructura del Patrón Decorator implementado:
![Diagrama UML](uml/UML.png)

## 🏗️ Explicación de la Implementación
El patrón **Decorator** ha sido implementado utilizando las siguientes clases principales:

- **`IProducto`**: Define la interfaz común para todos los productos.
- **`Producto`**: Clase base que representa un producto genérico.
- **`Cafe` y `Croissant`**: Productos concretos que extienden de `Producto`.
- **`ProductoDecorator`**: Decorador abstracto que envuelve a un `Producto` y delega sus métodos.
- **Decoradores concretos (`Chocolate`, `LecheDeslactosada`, `Grande`, etc.)**: Modifican dinámicamente las características del producto base.
- **`routes.pedidos`**: Módulo que recibe solicitudes HTTP y aplica decoradores en tiempo de ejecución.

## 🤝 Contribuciones
Este proyecto fue desarrollado por:
- 👩‍💻 Rita Trindade da Cruz
- 👨‍💻 Juan Andrés Gómez Pérez
- 👨‍💻 Brandon Eduardo Merchan


# Steelers Shop

Proyecto de ecommerce para el curso de ReactJS de CoderHouse, basado en productos del equipo de football americano Pittsburgh Steelers.


## Descripción

El sitio se abre en una página con todos los productos disponibles (con o sin stock), cargados en Firestore de Firebase.
Presionando en el botón "Ver producto" de cualquiera se accede a sus detalles, además de poder agregar la cantidad deseada al carrito.
El carrito de compra se puede administrar agregando o quitando productos, así como borrando todo el contenido. Este carrito se maneja a través de un Context.
El proceso final se da en el checkout, que genera una orden de compra y actualiza los stocks en Firestore.
Los colores se corresponden con los del equipo, así como los enlaces externos, que llevan a las redes sociales oficiales del equipo.


## Muestra del sitio

Se puede acceder a una muestra del sitio en https://cranky-northcutt-c69e03.netlify.app/.


## Dependencias

Utilizo las siguientes dependencias:

| Dependencia      | Descripción                         | Versión |
| ---------------- | ----------------------------------- | ------- |
| ReactJS          | Librería del proyecto               | 17.0.2  |
| React Router DOM | Para controlar la navegación        | 6.2.1   |
| Firebase         | Base de datos a través de Firestore | 9.6.1   |
| Bootstrap        | Estilos                             | 5.1.3   |
| Animate.css      | Animaciones                         | 1.0.0   |


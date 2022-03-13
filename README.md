# React JS - Heisenberg Games - Proyecto Ecommerce

## Presentación
Soy Andrés Bergara, este es mi proyecto para el curso de ReactJS en CoderHouse 2022.
El proyecto está creado con React, utilizando herramientas como React Router DOM, React Hooks y Material UI para estilizar la página junto a React-Bootstrap y React-Icons.


## Flujo Ecommerce
El usuario ingresa a la web y se despliega en el Home un Carousel con los productos más vendidos de la página, a los cuales se les puede hacer click para poder ir al detalle del producto seleccionado.
A través del nav menú , puede seleccionar la categoría de interés(Videogames o Peripherals), y navegar por un listado de productos filtrado para seleccionar el/los que desea, agregarlos al carrito, y realizar la compra.


### Home Page
Al iniciar la aplicación con el comando : npm start, se podra visualizar el home page, el cual tendra un carousel con los productos mas vendidos de la pagina, unos pequeños contenedores con mensajes para el usuario, el NavBar y el Footer.


### Items
Al acceder a la opción "Videogames" o "Peripherals", te redirigirá a un listado de productos filtrados con la categoria correspondiente a la seleccionada.

A su vez los items filtrados estaran presentados en forma de "Cards" de Material UI, las cuales tendran un componente "ItemCount" que te permitira seleccionar la cantidad deseada y agregarla al carrito(en caso de que la cantidad seleccionada no supere el stock del producto, de lo contrario mostrara un alert con un mensaje de error)

### Item Detail
Al hacer click en un Item, se redireccionara a los detalles de dicho item, donde podras
ver mas información del mismo, ademas de poder comprar la cantidad deseada de dicho producto.

### Cart
En la parte superior derecha en el Navbar(version desktop), se vera un Icono que al clickearlo te redirigirá al carrito ("/cart"), donde se desplegara una lista ordenara con los productos agregados al carrito, un breve resumen de cada producto, y una seccion donde mostrara el precio de cada producto y el precio total de la compra.

A su vez debajo del precio total se desplegaran 2 botones, uno para finalizar la compra y otro para seguir comprando, el boton de finalizar compra desplegara un modal para que el usuario pueda ingresas sus datos y realizar la compra (la cual enviara los datos de la compra a firestore para almacenarlos en el documento "orders", ademas de actualizar el stock de dicho producto restando la cantidad seleccionada por el usuario del stock original), por otro lado el boton de seguir comprando te redireccionara a la ruta "/category" con todos los productos de la página.

Al finalizar la compra con exito se mostrara en pantalla un contenedor con un mensaje, el ID de la compra, y un boton para seguir comprando.


### NavBar
En cualquier sección de la página se podra visualizar el NavBar, el cual dispone de : 

- Brand, el cual al hacer click te redirecciona al home page("/")
- Games, el cual al hacer click filtra los productos con categoria "videogames"
- Peripherals, el cual al hacer click filtra los productos con categoria "peripherals"
- Cart, el cual te redirige al carrito de compras con los items(en caso de que se haya agregado algun item al carrito) listados y un breve resumen de tu compra, o un contenedor con un mensaje y un boton para seguir comprando en caso de que no haya items agregados al carrito.
- Games reviews, el cual no tiene una funcionalidad creada aun
- blog, el cual no tiene una funcionalidad creada aun
- A la derecha en el NavBar se puede observar un icono con la imagen de perfil del usuario(por el momento es una imagen por defecto),
al hacer click en la imagen se desplegara un menu de opciones el cual aun no tiene una funcionalidad creada.


### Footer
En cualquier seccion de la página se podra visualizar el Footer, el cual dispone de 4 iconos clickeables los cuales te redirigen a su respectiva red social/Email. 

Tambien se puede visualizar los derechos de autor de la página.


## Librerias y dependencias utilizadas

### Material UI

Utilicé Material UI como base para los estilos de la página, ya que el mismo me permitia centrarme
en los temas fundamentales del curso, sin la necesidad de ignorar el estilo de la pagina, pudiendo asi
dar estilos de manera simple pero eficaz.

### React-Router-DOM

Utilice React-Router-DOM para dotar de navegabilidad a la pagina, utilizando los componentes que provee.

### React-Bootstrap

Utilicé React-Bootstrap para la implementación del Carousel en el home page ("/")

### React-Icons

Utilicé React-Icons para implementar los iconos de las redes sociales en el Footer





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

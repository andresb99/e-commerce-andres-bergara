# React JS - Heisenberg Games - Proyecto Ecommerce

## Presentación
Soy Andrés Bergara, este es mi proyecto para el curso de ReactJS en CoderHouse 2022 (entrega intermedia).
El proyecto está creado con React, utilizando herramientas como React Router DOM, React Hooks y Material UI para estilizar la página.


## Flujo Ecommerce
El usuario ingresa a la web y se despliega en el Home un listado de los productos.
A través del nav menú , puede seleccionar la categoría de interés, y navegar por un listado de productos filtrado para seleccionar el/los que desea,
o por el contrario puede seleccionar un producto desde el home page.


### Home Page
Al iniciar la aplicación con el comando : npm start, se podra visualizar el home page, el cual tendra todos los
items de la tienda y el NavBar.


### Item Detail
Al hacer click en un Item, se redireccionara a los detalles de dicho item, donde podras
ver mas información del mismo, ademas de poder comprar la cantidad deseada de dicho producto.


### NavBar
En cualquier sección de la página se podra visualizar el NavBar, el cual dispone de : 

- Brand, el cual al hacer click te redirecciona al home page
- Games, el cual al hacer click filtra los productos con categoria "videogames"
- Peripherals, el cual al hacer click filtra los productos con categoria "peripherals"
- Games reviews, el cual no tiene una funcionalidad creada aun
- blog, el cual no tiene una funcionalidad creada aun

A la derecha en el NavBar se puede observar un icono con la imagen de perfil del usuario(por el momento es una imagen por defecto),
al hacer click en la imagen se desplegara un menu de opciones el cual aun no tiene una funcionalidad creada.


## Librerias y dependencias utilizadas

### Material UI

Utilicé Material UI como base para los estilos de la página, ya que el mismo me permitia centrarme
en los temas fundamentales del curso, sin la necesidad de ignorar el estilo de la pagina, pudiendo asi
dar estilos de manera simple pero eficaz.

### React-Router-DOM
Utilice React-Router-DOM para dotar de navegabilidad a la pagina, utilizando los componentes que provee.




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

const express = require('express');
const routerApi = require('./routes');

// Importar middleware
const {logErrors, errorHandler} = require('./middleware/error_handler')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

// Definición del router
routerApi(app);

// Los middleware se añaden después de definir el router
// De esta manera la app sabe que debe usar esos middlewares
// El orden en el que se declare la función "use" dicta el orden de ejecución de los middleware
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' +  port);
});

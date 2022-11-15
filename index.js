const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

// Importar middleware
const {logErrors, errorHandler, boomErrorHandler} = require('./middleware/errorHandler')

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:5500', 'https://myapp.es'];

// Sirve para verificar si el origen que quiere acceder a la API está en la whitelist
const options = {
  origin: (origin, callback) => {
    if(whitelist.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error("No se tiene permiso"));
    }
  }
}
app.use(cors(options));

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
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port ' +  port);
});

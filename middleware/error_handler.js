// Middleware para hacer log de los errores
function logErrors(err, req, res, next){
  console.error(err);

  // Como le pasamos el error, sabe que el middleware es de tipo error
  next(err);
}

// Middleware que crea un estandar de formato cuando haya un error
function errorHandler(err, req, res, next){

  // 500 -> error interno del servidor
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

// Como usamos el módulo "boom" es necesario crear un middleware que gestione el estandar
// de formato para cuando haya un error que  se controle con boom
function boomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  }

  // Si no es de tipo "boom", se activará el middleware "errorHandler"
  next(err);
}

module.exports = { logErrors, errorHandler, boomErrorHandler }

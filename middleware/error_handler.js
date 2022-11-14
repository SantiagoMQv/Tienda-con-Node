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

module.exports = { logErrors, errorHandler }

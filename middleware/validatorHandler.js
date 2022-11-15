const boom  = require('@hapi/boom');

function validatorHandler(schema, property){
  // Necesitamos crear un middleware de forma dinámica, por lo que usamos un clousure
  return (req, res, next) => {
    // Recogemos la información de la petición
    const data = req[property];

    // Validamos la información de la petición
    // 'abortEarly' en false permite que joi envíe todos los errores de validación que encuentre
    const { error } = schema.validate(data, { abortEarly: false });

    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports = validatorHandler;

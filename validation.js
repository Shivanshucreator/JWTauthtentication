const Joi = require("@hapi/joi");


const registerValidation = details;
const loginValidation = logindetails;

function details(data){
  const schema = {
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().min(5).required()
  };
  return Joi.validate(data , schema);
};


function logindetails(data){
  const schema = {
    email: Joi.string().required().email(),
    password: Joi.string().min(5).required()
  };
  return Joi.validate(data , schema);
};


module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;

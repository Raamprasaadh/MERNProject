const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data)
{
    let errors = {};

    functions
    data.email = !isEmpty(data.email)?data.email:"";
    data.password = !isEmpty(data.password)?data.password:"";

    //email checks
    if(validator.isEmpty(data.email))
    {
        errors.email = "Email field is required";
    }else if(!validator.isEmail(data.email))
    {
        errors.email = "Enter a valid email id";
    }

    if(validator.isEmpty(data.password))
    {
        errors.password = "Password field is mandatory";
    }

    return{
        errors,
        isValid:isEmpty(errors)
    }
}
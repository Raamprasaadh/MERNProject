const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegisterInput(data){
    let errors ={};

    functions
    data.name = !isEmpty(data.name)?data.name:"";
    data.email = !isEmpty(data.email)?data.email:"";
    data.password = !isEmpty(data.password)?data.password:"";
    data.password2 = !isEmpty(data.password2)?data.password2:"";

    //name checks
if(validator.isEmpty(data.name)){
    errors.name = "Name field is required";
}

//email checks

if(validator.isEmpty(data.email))
{
    errors.email = "Email field is required";
}else if(!validator.isEmail(data.email))
{
    errors.email = "Enter valid email Address";
}

//password checks

if(validator.isEmpty(data.password))
{
    errors.password = "password field is required";
}
if(validator.isEmpty(data.password2))
{
    errors.password2 = "confirm password field is required";
}
if(!validator.isLength({min:6,max:30}))
{
    errors.password = "Password should be minimum 6 characters";
}
if(!validator.equals(data.password,data.password2))
{
    errors.password = "Password field and confirm passwordd field does not match";
}
// returning errors and is valid flag, is valid flag will be true if errors is empty0
return{
    errors,
    isValid:isEmpty(errors)
}
}
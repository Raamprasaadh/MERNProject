const bcrypt = require('bcryptjs');
const jwt = require ('jsonwebtoken');
const keys = require('../config/keys');

//loading validations
const validateRegistration = require('./validation/register');
const validateLogin = require('./validation/login');

//loading user model
const Users = require('../models/Users');

// @route /api/Users/register
// @desc to register new users
// @access public
/*
pass the req.body to ValidateRegistration
if it is valid check in db if the email id already exists
if not add new data to db
*/
router.post('/register',(req,res)=>{
    //Form Validation

    const {errors,isValid} = validateRegistration(req.body);

    if(!isValid)
    {
        return res.status(400).json(errors);
    }

    Users.findOne({email:req.body.email}).then(user=>{
        if(user)
        {
            return res.status(500).json({email:"Email already exists"});
        }
        else{
            const newUser = new Users({
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            });

            bcrypt.genSalt(10,(err,salt)=>{
                bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err)
                {
                    console.log(err);
                }
                newUser.password = hash;
                newUser.save()
                .then(user => res.json(user))
                .catch(err=>{console.log(err)});
            });
            });
        }
    });
});


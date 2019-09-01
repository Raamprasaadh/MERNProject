const jwtStrategy = require("passport-jwt").Strategy;
const extractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const User = mongoose.model("Users");
const keys = require('./keys');

const opts = {};
opts.jwtFromRequest = extractJwt.fromAuthHeaderAsBearerToken();
opts.secretKey = keys.secretKey;

modules.exports= passport =>{
    passport.use(new jwtStrategy(opts,(jwt_payload, done) =>{
        User.findById(jwt_payload.id)
        .then(user=>{
            if(user)
            {
                return done(null,user);
            }
            return (null,false);
        }).catch(err=>console.log(err));
    })
    );
};


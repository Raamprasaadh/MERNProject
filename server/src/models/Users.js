const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
   name : {
       type:String,
       required:true
   } ,
   emailId:{
       type:String,
       required:true
   },
   password:{
    type:String,
    required:true
},
date:{
    type:Date,
    default : Date.now
}
});

module.exports = Users = mongoose.model("users",userSchema);
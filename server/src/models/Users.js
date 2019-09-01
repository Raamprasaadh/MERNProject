const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = newSchema({
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
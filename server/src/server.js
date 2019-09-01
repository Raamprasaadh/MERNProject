//dependencies
const mongoose =require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

//serving app

const API_Port = 3001;
const app = express();
//cors is an package used to get response from two different domains
app.use(cors());
const router =express.Router();
const User = './routes/Users';

//using body parser in the app
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(logger('dev'));

//connecting to Database
const db = "mongodb://127.0.0.1:27017/MERNProject";
mongoose.connect(db,{useNewUrlParser:true})
.then(()=>console.log('DB Connected successfully'))
.catch(err=>console.log(err));

//routes
;
app.use('/api/users/register',require('./routes/Users'));
router.get('/',(req,res)=>{
    return res.send('successfullyy hit 3001');
});
app.use('/',router)
app.listen(API_Port,()=>console.log(`listening on port ${API_Port}`));


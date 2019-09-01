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

router.get('/',(req,res)=>{
    return res.send('successfullyy hit 3001');
});

app.use('/',router);

app.listen(API_Port,()=>console.log(`listening on port ${API_Port}`));


const express=require('express')
require('dotenv').config({path:'./config/config.env'})
const morgan=require('morgan');
const apiRouter=require('./routes/api')



const app=express();

app.use(morgan('dev'));

app.use('/api/v1',apiRouter);

module.exports=app;
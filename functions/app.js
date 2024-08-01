const express = require('express');
const app = express();
const serverless = require('serverless-http');
/* const PORT = process.env.PORT || 14452; */
const path = require('path');
const router = require('../routes/route');

app.use(express.static(path.join(__dirname,'..','.netlify','dist')));
app.use('/',router);


app.use('/.netlify/functions/app',app)
module.exports.handler = serverless(app); 
/*
app.listen(PORT,()=>{
    console.log(PORT+" is running now!");
});
*/
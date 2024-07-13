const express = require('express');
const app = express();
const PORT = 14452;
const router = require('./routes/route');


app.use('/',router);



app.listen(PORT,()=>{
    console.log(PORT+" is running now!");
});
const express = require('express');
const app = express();
const PORT = 14452;
const path = require('path');
const router = require('./routes/route');

app.use(express.static(path.join(__dirname,'views',)));
app.use('/',router);



app.listen(PORT,()=>{
    console.log(PORT+" is running now!");
});
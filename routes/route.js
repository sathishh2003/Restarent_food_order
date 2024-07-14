const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'));
});
router.get('/veg',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','veg.html'));
});
router.get('/nonveg',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','non_veg.html'));
});
router.get('/icecream',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','icecream.html'));
});
router.get('/milkshakes',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','milkshakes.html'));
});
router.get('/juices',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','juices.html'));
});
router.get('/cakes',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','cakes.html'));
});
router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','contact.html'));
});


module.exports = router;
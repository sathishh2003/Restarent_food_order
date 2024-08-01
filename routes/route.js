const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/index',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','.netlify','dist','index.html'));
});
router.get('/veg',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','.netlify','dist','veg.html'));
});
router.get('/nonveg',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','.netlify','dist','non_veg.html'));
});
router.get('/icecream',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','.netlify','dist','icecream.html'));
});
router.get('/milkshakes',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','.netlify','dist','milkshakes.html'));
});
router.get('/juices',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','.netlify','dist','juices.html'));
});
router.get('/cakes',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','.netlify','dist','cakes.html'));
});
router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','.netlify','dist','contact.html'));
});


module.exports = router;
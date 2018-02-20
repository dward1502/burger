const express = require('express');
const router = express.Router();
const burger = require('../models/burger.js');
//creating the routing of the webpage 

router.get("/", function(req,res){
    burger.all(function(data){
        let bdbObject = {
            burgers: data
        };
        console.log( bdbObject);
        res.render("index", bdbObject);
    });
});

router.post("/burgers", function(req, res){
    burger.create([
        "burger_name"
    ],[
        req.body.burger_name
    ], function(result){
        res.json({ id: result.insertId});
    }); 
});


module.exports = router;
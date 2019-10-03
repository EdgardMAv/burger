const express = require("express");
const router = express.Router();
const burger = require("../models/burger");

router.get("/", (req, res) =>{
    burger.selectAll((data) => {
        let burger = {
            burger: data
        };
        res.render("index", burger);
    });
});

router.post("../api/burgers", (req, res) => {
    burger.create(["burger_name"], 
    [req.body.name], 
    (result) =>{
        res.json({id: result.insertId});
    });
});

router.put("/burgers/:id", (req, res) =>{
    let condition = "id = " + req.params.id;
    
    console.log("condition", condition);

    burgers.update({
       devoured: true 
    }, condition, (data) => {
        res.redirect('/');
    });

});

module.exports = router;
const express = require("express");
const router = express.Router();
const maria = require('../database/connect/maria');

router.get("/", (req, res) => {
  maria.query('SELECT * FROM notice order by notice_key DESC limit 10',function(error,result,fields){
    if(error){
      console.log(error);
    }
    res.send(result);
  })
});

router.delete("/:key", (req, res) => {


  res.send("notice world");
});

router.get("/detail", (req, res) => {
  res.send("notice world");
});

router.get("/new", (req, res) => {
  res.send("notice world");
});

router.get("/edit", (req, res) => {
  res.send("notice world");
});

module.exports = router;

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("notice world");
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

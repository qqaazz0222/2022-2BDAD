var express = require("express");
var router = express.Router();
const pool = require("../db/db");

/* GET home page. */
router.get("/", async (req, res, next) => {
    const test1 = await pool.query("SELECT * FROM post");
    console.log(test1[0]);
    res.render("index", { title: "Node.js", test2: test1[0] });
});

module.exports = router;

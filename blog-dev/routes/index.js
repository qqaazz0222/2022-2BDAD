var express = require("express");
var router = express.Router();
const pool = require("../db/db");

/* GET home page. */
router.get("/", async (req, res, next) => {
    const post = await pool.query("SELECT * FROM post");
    console.log(post[0]);
    res.render("index", { title: "Node.js", post: post[0] });
});

module.exports = router;

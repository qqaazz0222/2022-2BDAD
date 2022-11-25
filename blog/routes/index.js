var express = require("express");
var router = express.Router();
// const pool = require("../db/db");

/* GET home page. */
router.get("/", async (req, res, next) => {
    // const posts = await pool.query("SELECT * FROM post;");
    res.render("index", {});
    // title: "Node.js", posts: posts[0]
});

module.exports = router;

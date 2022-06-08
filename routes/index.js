const express = require("express");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    //const logs = await Log.findAll();

    res.render("sequelize");
  } catch (e) {
    console.error(e);
    next(e);
  }
});
module.exports = router;

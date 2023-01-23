const express = require("express");
const router = express.Router();
const ioc = require("../appconfig");

const dataservice = ioc.namudataservice;

router.route("/:kind").get(async (req, res, next) => {
  try {
    const Namu_Datas = await dataservice.findKind(req.params.kind);

    res.json(Namu_Datas);
  } catch (e) {
    console.error(e);
    next(e);
  }
});

module.exports = router;

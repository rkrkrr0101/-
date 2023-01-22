const express = require("express");
const router = express.Router();
const ioc = require("../appconfig");

const dataservice = ioc.namudataservice;

router.route("/hour").get(async (req, res, next) => {
  try {
    const Namu_Datas = await dataservice.findKind("hour");

    res.json(Namu_Datas);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
router.route("/day").get(async (req, res, next) => {
  try {
    const Namu_Datas = await dataservice.findKind("day");

    res.json(Namu_Datas);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
router.route("/week").get(async (req, res, next) => {
  try {
    const Namu_Datas = await dataservice.findKind("week");

    res.json(Namu_Datas);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
router.route("/month").get(async (req, res, next) => {
  try {
    const Namu_Datas = await dataservice.findKind("month");

    res.json(Namu_Datas);
  } catch (e) {
    console.error(e);
    next(e);
  }
});
//이거로 다 묶어지긴하는데 이걸 묶는게맞나?
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

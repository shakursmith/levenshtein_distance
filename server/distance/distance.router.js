const router = require("express").Router();
const controller = require("./distance.controller");
const methodNotAllowed = require("../errors/asyncErrorBoundary");

router.route("/").post(controller.create).all(methodNotAllowed);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  createController,
  getAllController,
  getSingleController,
  repaireController,
  updateController,
} = require("../controller/ControllerController");

router.route("/").post(createController).get(getAllController);
router.route("/:id").get(getSingleController).patch(updateController);
router.route("/repair/:id").patch(repaireController);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  createSite,
  getAllSite,
  getSingleSite,
  fixedSite,
  updateSite,
  replaceComponent,
  replaceController,
} = require("../controller/SiteController");

router.route("/").post(createSite).get(getAllSite);
router.route("/:id").get(getSingleSite).patch(updateSite);
router.route("/fixed/:id").patch(fixedSite);
router.route("/uninstall-controller/:id").patch(replaceController);
router.route("/uninstall-component/:id").patch(replaceComponent);

module.exports = router;

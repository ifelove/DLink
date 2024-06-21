const express = require("express");
const router = express.Router();

const {
  createComponent,
  getAllComponent,
  getSingleComponent,
  repaireComponent,
  updateComponent,
} = require("../controller/ComponentController");

router.route("/").post(createComponent).get(getAllComponent);
router.route("/:id").get(getSingleComponent).patch(updateComponent);
router.route("/repair:id").patch(repaireComponent);

module.exports = router;

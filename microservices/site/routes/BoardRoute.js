const express = require("express");
const router = express.Router();

const {
  createBoard,
  getAllBoard,
  getSingleBoard,
  repaireBoard,
  updateBoard,
} = require("../controller/BoardController");

router.route("/").post(createBoard).get(getAllBoard);
router.route("/:id").get(getSingleBoard).patch(updateBoard);
router.route("/repair/:id").patch(repaireBoard);

module.exports = router;

const Board = require("../model/Board");
const BoardReport = require("../model/report/BoardReport");
const { StatusCodes } = require("http-status-codes");
const {
  CustomError,
  BadrequestError,
  UnAunthenticatedError,
  UnauthorizedError,
  NotFoundError,
} = require("../errors/indexError");

//LAB

// track board
// get all boards
//get board details

//repair board
// updates board status after repair

//create board

const createBoard = async (req, res) => {
  const { boardId, version, presentLocation, status } = req.body;

  let board = new Board({
    boardId,
    version,
    presentLocation,
    status,
    fault_category,
  });

  board = await board.save();
  res.status(StatusCodes.CREATED).json({ board: board });
};

const getSingleBoard = async (req, res) => {
  const boardId = req.params.id;

  if (!boardId) {
    throw new BadrequestError(`Please provide board id to get board details`);
  }

  const board = await Board.findOne({ _id: boardId });

  if (!board) {
    throw new NotFoundError(
      `board with id ${boardId} not found or does not exist`
    );
  }

  res.status(StatusCodes.OK).json({ board: board });
};

const getAllBoard = async (req, res) => {
  const { search } = req.query;

  const queryObj = {};

  if (search) {
    queryObj.boardId = { $regex: search, $options: "i" };
    // queryObj.brand = { $regex: search, $options: "i" };
  }

  let result = Board.find(queryObj);

  //pagination

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  const endIndex = page * limit;

  result = result.skip(skip).limit(limit);

  const totalCount = await Board.countDocuments(queryObj);
  const numOfPages = Math.ceil(totalCount / limit);

  //setting content-range header
  const startRange = skip + 1;
  const endRange = endIndex < totalCount ? endIndex : totalCount;

  res.set("X-Total-Count", totalCount);
  res.set("Content-Range", `${startRange}-${endRange}/${totalCount}`);

  const boards = await result;

  res.status(StatusCodes.OK).json({ boards, totalCount, numOfPages });
};

const repaireBoard = async (req, res) => {
  const boardId = req.params.id;
  const { status } = req.body;

  if (!boardId || !status) {
    throw new BadrequestError(
      `Please provide board id  and update status to repair board`
    );
  }

  const board = await Board.findOne({ _id: boardId });

  if (!board) {
    throw new NotFoundError(
      `board with id ${boardId} not found or does not exist`
    );
  }

  board.status = status;
  await board.save();

  res
    .status(StatusCodes.OK)
    .json({ board: board, msg: "board repaire status updated successfully" });
};

const updateBoard = async (req, res) => {
  const id = req.params.id;
  const { status, presentLocation, boardId } = req.body;

  if (!boardId || !status || !boardId) {
    throw new BadrequestError(
      `Please provide board id  and update status to repair board`
    );
  }

  const board = await Board.findOne({ _id: id });

  if (!board) {
    throw new NotFoundError(
      `board with id ${boardId} not found or does not exist`
    );
  }

  board.status = status;
  board.presentLocation = presentLocation;
  board.boardId = boardId;
  await board.save();

  res
    .status(StatusCodes.OK)
    .json({ board: board, msg: "board details updated successfully" });
};

const boardReporting = async (req, res) => {
  let report = {};

  const id = req.params.id;
  const {
    boardId,
    faultCategory,
    faultDesc,
    comment,
    dateOfRepaire,
    componentReplaced,
    categoryAfterFix,
    faultDescAfterFix,
    remark,
    version,
  } = req.body;

  const board = await Board.findOne({ _id: id });

  if (!board) {
    throw new NotFoundError(
      `board with id ${boardId} not found or does not exist`
    );
  }

  report.technician = "user";
  report.boardUUID = board._id;
  report.boardId = board.boardId;
  report.faultCategory = faultCategory;
  report.faultDesc = faultDesc;
  report.comment = comment;
  report.dateOfRepaire = board.updatedAt;
  report.componentReplaced = componentReplaced;
  report.categoryAfterFix = categoryAfterFix;
  report.faultDescAfterFix = faultDescAfterFix;
  report.remark = remark;
  report.version = board.version;

  console.log(report);
  //send report to database(create report)
  report = new BoardReport(report);
  await report.save();
  res
    .status(StatusCodes.OK)
    .json({ report: report, msg: "board repaire status updated successfully" });

  //send report to googlesheet api
};

module.exports = {
  createBoard,
  getSingleBoard,
  getAllBoard,
  repaireBoard,
  updateBoard,
};

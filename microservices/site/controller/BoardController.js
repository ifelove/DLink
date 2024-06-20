const Board = require("../model/Board");
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
  const boards = await Board.find({});
  res.status(StatusCodes.OK).json({ boards: boards });
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

module.exports = {
  createBoard,
  getSingleBoard,
  getAllBoard,
  repaireBoard,
  updateBoard
};

const Controller = require("../model/Controller");
const {
  CustomError,
  BadrequestError,
  UnAunthenticatedError,
  UnauthorizedError,
  NotFoundError,
} = require("../errors/indexError");

const { StatusCodes } = require("http-status-codes");

//NOC

// track controller
// get all controllers
//get all controllers given to fse
//get controller details
// updates controller details

//FSE

// updates controller status installing and uninstalling controller

//LAB

// track controller
// get all controllers
//get controller details
// updates controller details
//repair controller
// updates controller status after repair

const createController = async (req, res) => {
  const {
    serialNumber,
    pry_boardId,
    sec_boardId,
    type,
    version,
    presentLocation,
    status,
    action,
    controllerPart,
  } = req.body;

  let controller = new Controller({
    serialNumber,
    pry_boardId,
    sec_boardId,
    type,
    version,
    presentLocation,
    status,
    action,
    controllerPart,
  });

  controller = await controller.save();
  res.status(StatusCodes.CREATED).json({ controller: controller });
};

const getSingleController = async (req, res) => {
  const controllerId = req.params.id;

  if (!controllerId) {
    throw new BadrequestError(
      `Please provide controller id to get controller details`
    );
  }

  const controller = await Controller.findOne({ _id: controllerId });

  if (!controllerId) {
    throw new NotFoundError(
      `board with id ${controllerId} not found or does not exist`
    );
  }

  res.status(StatusCodes.OK).json({ controller: controller });
};

const getAllController = async (req, res) => {
  const controllers = await Controller.find({});
  res.status(StatusCodes.OK).json({ controllers: controllers });
};

const repaireController = async (req, res) => {
  const controllerId = req.params.id;
  const {
    serialNumber,
    pry_boardId,
    sec_boardId,
    type,
    version,
    presentLocation,
    status,
    action,
    controllerPart,
  } = req.body;

  if (
    !controllerId ||
    !status ||
    !serialNumber ||
    !pry_boardId ||
    !sec_boardId ||
    !type ||
    !version ||
    !presentLocation ||
    !action ||
    !controllerPart
  ) {
    throw new BadrequestError(
      `Please provide board id  and update status to repair board`
    );
  }

  const controller = await Controller.findOne({ _id: controllerId });

  if (!controller) {
    throw new NotFoundError(
      `board with id ${controllerId} not found or does not exist`
    );
  }

  controller.status = status;
  controller.serialNumber = serialNumber;
  controller.pry_boardId = pry_boardId;
  controller.sec_boardId = sec_boardId;
  controller.type = type;
  controller.version = version;
  controller.presentLocation = presentLocation;
  controller.action = action;
  controller.controllerPart = controllerPart;
  await controller.save();

  res.status(StatusCodes.OK).json({
    controller: controller,
    msg: "controller repair status updated successfully",
  });
};

const updateController = async (req, res) => {
  const controllerId = req.params.id;
  const {
    serialNumber,
    pry_boardId,
    sec_boardId,
    type,
    version,
    presentLocation,
    status,
    action,
    controllerPart,
  } = req.body;

  if (
    !controllerId ||
    !status ||
    !serialNumber ||
    !pry_boardId ||
    !sec_boardId ||
    !type ||
    !version ||
    !presentLocation ||
    !action ||
    !controllerPart
  ) {
    throw new BadrequestError(
      `Please provide board id  and update status to repair board`
    );
  }

  const controller = await Controller.findOne({ _id: controllerId });

  if (!controller) {
    throw new NotFoundError(
      `board with id ${controllerId} not found or does not exist`
    );
  }

  controller.status = status;
  controller.serialNumber = serialNumber;
  controller.pry_boardId = pry_boardId;
  controller.sec_boardId = sec_boardId;
  controller.type = type;
  controller.version = version;
  controller.presentLocation = presentLocation;
  controller.action = action;
  controller.controllerPart = controllerPart;
  await controller.save();

  res.status(StatusCodes.OK).json({
    controller: controller,
    msg: "controller details updated successfully",
  });
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

  const controller = await Controller.findOne({ _id: id });

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
  createController,
  getSingleController,
  getAllController,
  updateController,
  repaireController,
};

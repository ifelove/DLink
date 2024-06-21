const Component = require("../model/Component");
const { StatusCodes } = require("http-status-codes");
const {
  CustomError,
  BadrequestError,
  UnAunthenticatedError,
  UnauthorizedError,
  NotFoundError,
} = require("../errors/indexError");
const { get } = require("http");

//NOC

// track conmponent
// get all components given to fse
//get component details
//get component details
// updates conmponents details

//FSE

// updates component status installing and uninstalling component

//LAB

// track component
// get all components
//get components details
// updates component details
//repair component
// updates component status after repair

const createComponent = async (req, res) => {
  const { name, serialNumber, version, type, presentLocation, status, action } =
    req.body;

  let board = new Component({
    name,
    serialNumber,
    version,
    type,
    presentLocation,
    status,
    action,
  });

  board = await board.save();
  res.status(StatusCodes.CREATED).json({ board: board });
};

const getSingleComponent = async (req, res) => {
  const componentId = req.params.id;

  if (!componentId) {
    throw new BadrequestError(`Please provide board id to get board details`);
  }

  const component = await Component.findOne({ _id: componentId });

  if (!componentId) {
    throw new NotFoundError(
      `board with id ${componentId} not found or does not exist`
    );
  }

  res.status(StatusCodes.OK).json({ component: component });
};

const getAllComponent = async (req, res) => {
  const components = await Component.find({});
  res.status(StatusCodes.OK).json({ components: components });
};

const repaireComponent = async (req, res) => {
  const componentId = req.params.id;
  const { name, presentLocation, serialNumber, status } = req.body;

  if (!componentId || !status || !name || !serialNumber || !presentLocation) {
    throw new BadrequestError(
      `Please provide component id  and update status to repair component`
    );
  }

  const component = await Component.findOne({ _id: componentId });

  if (!componentId) {
    throw new NotFoundError(
      `board with id ${componentId} not found or does not exist`
    );
  }

  component.status = status;
  await component.save();

  res.status(StatusCodes.OK).json({
    component: component,
    msg: "component repaire status updated successfully",
  });
};

const updateComponent = async (req, res) => {
  const componentId = req.params.id;
  const { name, presentLocation, serialNumber,status } = req.body;

  if (!name || !serialNumber || !status) {
    throw new BadrequestError(
      `Please provide component id  and update status to repair board`
    );
  }

  const component = await Component.findOne({ _id:componentId });

  if (!component) {
    throw new NotFoundError(
      `board with id ${componentId} not found or does not exist`
    );
  }

  component.status = status;
  component.presentLocation = presentLocation;
  component.name = name;
    component.serialNumber = serialNumber;
  await component.save();

  res
    .status(StatusCodes.OK)
    .json({ component: component, msg: "board details updated successfully" });
};

module.exports = {
  createComponent,
  getSingleComponent,
  getAllComponent,
  repaireComponent,
  updateComponent,
};

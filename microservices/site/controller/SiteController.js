const Site = require("../model/Site");
const { StatusCodes } = require("http-status-codes");
const {
  CustomError,
  BadrequestError,
  UnAunthenticatedError,
  UnauthorizedError,
  NotFoundError,
} = require("../errors/indexError");

//Noc

//assign site to fse
//check site is assigned to fse
//check site details
//update site details
//get all sites
//get all sites assigned to fse
//track site address

//fse

//get all sites assigned to fse
//get site details
//Replacement of component(installing and uninstalling component)
//Replacement of controller
//track site address
//update site details

//Lab

//get all sites assigned to fse
//get site details
//update site details

const createSite = async (req, res) => {
  const {
    siteName,
    latitude,
    longitude,
    address,
    topography,
    type,
    location,
    region,
    controller,
    components,
  } = req.body;

  let site = new Site({
    siteName,
    latitude,
    longitude,
    address,
    topography,
    type,
    location,
    region,
    controller,
    components,
  });

  site = await site.save();
  res.status(StatusCodes.CREATED).json({ site: site });
};

const getSingleSite = async (req, res) => {
  const siteId = req.params.id;

  if (!siteId) {
    throw new BadrequestError(`Please provide site id to get board details`);
  }

  const site = await Site.findOne({ _id: siteId });

  if (!site) {
    throw new NotFoundError(
      `board with id ${siteId} not found or does not exist`
    );
  }

  res.status(StatusCodes.OK).json({ site: site });
};

const getAllSite = async (req, res) => {
  const sites = await Site.find({});
  res.status(StatusCodes.OK).json({ sites: sites });
};

const fixedSite = async (req, res) => {
  const siteId = req.params.id;
  const { controller, components } = req.body;

  if (!controller || components) {
    throw new BadrequestError(
      `Please provide board id  and update status to repair board`
    );
  }

  const site = await Site.findOne({ _id: siteId });

  if (!site) {
    throw new NotFoundError(
      `site with id ${siteId} not found or does not exist`
    );
  }

  site.controller = controller;
  site.components = components;
  await site.save();

  res.status(StatusCodes.OK).json({ site: site, msg: "sla status updated" });
};

const updateSite = async (req, res) => {
  const id = req.params.id;
  const {
    siteName,
    latitude,
    longitude,
    address,
    topography,
    type,
    location,
    region,
    controller,
    components,
  } = req.body;

  const site = await Site.findOne({ _id: site });

  if (!site) {
    throw new NotFoundError(
      `board with id ${siteId} not found or does not exist`
    );
  }

  site.siteName = siteName;
  site.latitude = latitude;
  site.longitude = longitude;

  site.address = address;
  site.topography = topography;
  site.type = type;
  site.location = location;
  site.region = region;
  site.controller = controller;
  site.components = components;
  await site.save();

  res
    .status(StatusCodes.OK)
    .json({ site: site, msg: "board details updated successfully" });
};

module.exports = {
  createSite,
  getSingleSite,
  getAllSite,
  fixedSite,
  updateSite,
};

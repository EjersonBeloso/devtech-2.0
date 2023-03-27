const asyncHandler = require("express-async-handler");
const Service = require("../models/serviceModel");
const User = require("../models/userModel");

//desc Get Service|GET req
//route /api/service/
//public
const getService = asyncHandler(async (req, res) => {
	const service = await Service.find({ user: req.user.id });
	res.status(200).json(service);
});

const getAllService = asyncHandler(async (req, res) => {
	const service = await Service.find(req.body);
	res.status(200).json(service);
});

//desc Add Service|POST req
//route /api/service/
//public
const addService = asyncHandler(async (req, res) => {
	if (!req.body) {
		res.status(400);
		throw new Error("Please add a text field");
	}

	const service = await Service.create({
		user: req.user.id,
		title: req.body.title,
		description: req.body.description,
		image: req.body.image,
		price: req.body.price,
	});
	res.status(200).json(service);
});

//desc Edit Service|PUT req
//route /api/service/
//public
const editService = asyncHandler(async (req, res) => {
	const service = await Service.findById(req.params.id);

	if (!service) {
		res.status(400);
		throw new Error("Service Not found");
	}
	const updateService = await Service.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true }
	);
	res.status(200).json(updateService);
});

//desc Delete Service|DELETE req
//route /api/service/
//public
const deleteService = asyncHandler(async (req, res) => {
	const id = await Service.findById(req.params.id);

	if (!id) {
		res.status(400);
		throw new Error("Service Not found");
	}
	await Service.findByIdAndDelete(req.params.id);
	res.status(200).json({ id: `Deleted goal ${req.params.id}` });
});

module.exports = {
	getService,
	addService,
	editService,
	deleteService,
	getAllService,
};

const express = require("express");
const router = express.Router();
const {
	getService,
	addService,
	editService,
	deleteService,
} = require("../controller/serviceController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getService).post(protect, addService),
	router.route("/:id").put(protect, editService).delete(protect, deleteService);

module.exports = router;

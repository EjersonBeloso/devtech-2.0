const express = require("express");
const router = express.Router();
const {
	getService,
	addService,
	editService,
	deleteService,
	getAllService,
	getServiceById,
} = require("../controller/serviceController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getService).post(protect, addService);
router.get("/all", getAllService),
	router
		.route("/:id")
		.put(editService)
		.delete(protect, deleteService)
		.get(getServiceById);

module.exports = router;

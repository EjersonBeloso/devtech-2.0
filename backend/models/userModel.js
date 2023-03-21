const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Please add your name"],
		},
		email: {
			type: String,
			required: [true, "Please add your email"],
			unique: true,
		},
		password: {
			type: String,
			required: [true, "Please create a password"],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

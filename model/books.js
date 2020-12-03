const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			require: true,
		},
		publication: {
			type: String,
			require: true,
		},
		author: {
			type: String,
			require: true,
		},
		category: {
			type: String,
			require: true,
		},
		publishedAt: {
			type: Number,
			require: true,
		},
		cost: {
			type: Number,
			require: true,
		},
		isBestSeller: {
			type: String,
			require: true,
		},
	},
	{ timestamps: true },
);

module.exports = mongoose.model('Books',bookSchema)
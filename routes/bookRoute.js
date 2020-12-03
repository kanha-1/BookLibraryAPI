const router = require("express").Router();
const Books = require("../model/books");

// insert books
router.post("/addBook", async (req, res) => {
	const books = new Books({
		title: req.body.title,
		publication: req.body.publication,
		author: req.body.author,
		category: req.body.category,
		publishedAt: req.body.publishedAt,
		cost: req.body.cost,
		isBestSeller: req.body.isBestSeller,
	});
	try {
		const savedBooks = await books.save();
		res.send(savedBooks);
	} catch (err) {
		res.status(400).send(err.message);
	}
});

// Get all the books
router.get("/allBooks", async (req, res) => {
	const allbooks = await Books.find({});
	try {
		res.status(200).send(allbooks);
	} catch (error) {
		res.status(400).send(error);
	}
});

// Read - Get all the books by author
router.get("/bookByAuthor", async (req, res) => {
	const Bookauthor = await req.query.author;
	const finded = await Books.find({ author: Bookauthor });
	if (finded) return res.status(200).send(finded);
});

// Get all the book that were published by year
router.get("/bookByYear", async (req, res) => {
	const minyr = await req.query.minyr;
	const maxyr = await req.query.maxyr;
	// console.log(minyr, maxyr);
	const findyr = await Books.find({ publishedAt: { $gt: minyr, $lte: maxyr } });
	if (findyr) return res.status(200).send(findyr);
	// console.log(findyr)
});

// Get all the books by cost
router.get("/bookByCost", async (req, res) => {
	const min = await req.query.min;
	const max = await req.query.max;
	const find = await Books.find({ cost: { $gt: min, $lte: max } });
	if (find) return res.status(200).send(find);
});
// Get the average price of all the book
router.get("/bookByAveragePrice", async (req, res) => {});

// Update the cost of all the books by catagory
router.put("/updateBook", async (req, res) => {
	const findBook = await req.query.UpBooks;
	const costup = await req.query.cost;
	console.log(findBook);
	const upBook = await Books.updateMany(
		{ category: findBook },
		{ $set: { cost: costup } },
	);
	if (upBook) return res.status(200).json("Books update succseefully");
});

// Delete book by name
router.delete("/deleteBook/:id", async (req, res) => {
	const deleteBook = await Books.findByIdAndDelete({ _id: req.params.id });
	if (deleteBook) {
		return res
			.status(200)
			.send(`${deleteBook.title} Book deleted from library`);
	} else {
		res.status(400).send(`Book not found in library`);
	}
});
module.exports = router;

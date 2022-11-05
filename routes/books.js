const router = require("express").Router();

const Books = require("../models/Books");

const {
    verifyToken,
} = require("./verification");

router.post("/", async (req,res) => {
    try {
        const newBook = new Books({
            title : req.body.title,
            title_ar : req.body.title_ar,
            publication_year: req.body.publication_year,
            publication_year_ar: req.body.publication_year_ar,
            exhibitor_booth: req.body.exhibitor_booth,
            exhibitor_booth_ar: req.body.exhibitor_booth_ar,
            authors: req.body.authors,
        });
        const savedBook = newBook.save();
        res.status(200).json("Sucessfully created a new book");
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/", verifyToken, async(req, res) => {
    try {
        const query = req.query;
        const books = await Books.find({$and:[query]});
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json(err)
    }
})
module.exports = router;
const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        unique: true,
    },
    title_ar: {
        type: String,
        requried: true,
    },
    publication_year: {
        type: String,
        required: true,
    },
    publication_year_ar: {
        type: String,
        required: true,
    },
    exhibitor_booth: {
        type: String,
        required: true,
    },
    exhibitor_booth_ar: {
        type: String,
        required: true,
    },
    authors: {
        type: Array,
        items: {
            type: Object,
            properties :{
                title: {
                    type: String,
                    required: true,
                },
                title_ar: {
                    type: String,
                    required: true,
                },
                image: {
                    type: String,
                    required: true,    
                }
            },
        },
        required: true,
    }

  });
  

module.exports =  mongoose.model("Books", booksSchema);
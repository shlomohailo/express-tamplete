const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const books = new Schema({
    idBooks: { type: Number, require: true },
    nameBooks: { type: String, require: true },
    page: { type: Number, require: true },
    obj: { type: String, require: true },

})

module.exports = mongoose.model("books", books)
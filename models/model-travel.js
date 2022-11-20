// let countries =
//     [
//         {
//             id: 0,
//             name: "israel",
//             cities: [
//                 "tel-aviv",
//                 "lod",
//                 "rehovot"
//             ],
//             obj: {
//                 capital: "jerusalem",
//                 airport: "ben-gurion"
//             }
//         
//         },
//     ]
// module.exports = countries;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Countries = new Schema({
    idCountries: Number,
    nameCountries: String,
    cities: Array[String],
    obj: Object,

})

module.exports = mongoose.model("countries", Countries)
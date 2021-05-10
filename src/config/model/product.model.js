const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Products = new Schema({
    id: {
        type: String
    },
    name: {
        type: String
    },
    price: {
        type: Number
    },
    url: {
        type: String
    },
    decreption: {
        type: String
    },
    category: {
        type: String
    }
}, {
    collection: 'products'
})

module.exports = mongoose.model('Products', Products)
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const item = new Schema({
    title: {
        type: String,
        required: true
    },
    comments: {
        type: String
    },
    link: {
        type: String,
    },
    item_picture: {
        type: String
    },
    price: {
        type: Number
    },
    bought: {
        type: Boolean
    }
})

module.exports = mongoose.model('Item', item)
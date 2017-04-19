const mongoose = require('mongoose')
const Schema = mongoose.Schema

const list = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['Shopping List', 'Wishlist'],
        required: true
    },
    category: {
        type: String,
        enum: ['Fashion', 'Beauty', 'Sports', 'Music', 'Movies/TV', 'Games', 'Books', 'Groceries', 'Other'],
        required: true
    },
    privacy: {
        type: Boolean,
        required: true
    },
    items: [{
        item: {
            type: Schema.Types.ObjectId,
            ref: 'Item'
        }
    }]
})

module.exports = mongoose.model('List', list)
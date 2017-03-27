const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    local: {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        firstname: String,
        lastname: String,
        age: Number,
        profile_picture: String,
        description: String
    },
    lists: [{
        list: {
            type: Schema.Types.ObjectId,
            ref: 'List'
        }
    }]
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
})

module.exports = mongoose.model('User', userSchema)
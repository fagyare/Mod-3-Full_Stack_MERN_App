const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    email: {
        type: String,
        required: true 
    },

    // role: {
    //     type: String,
    //     required: true 
    // },

    department: {
        type: String,
        enum: [
            'Development',
            'Finance', 
            'Operations', 
            'Marketing', 
        
            'Programs'
        ],
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User
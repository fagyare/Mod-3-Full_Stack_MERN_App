const mongoose = require('mongoose')

const Schema = mongoose.Schema

const departmentSchema = new Schema({
    name: {
        type: String,
        enum: ['Development', 'Finance', 'Operations', 'Marketing', 'Programs'],
        required: true,
    },
    users: [{
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'User'
    }]
})

const Department = mongoose.model('Department', departmentSchema)

module.exports = Department;
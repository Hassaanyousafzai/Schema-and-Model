const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: Number,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
})

const User = mongoose.model('NEWUSER', StudentSchema)

module.exports = User;
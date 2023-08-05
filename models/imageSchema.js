const mongoose = require('mongoose')

const imageSchema = mongoose.Schema({
    photo: {
        type: String,
        required: true
    }
},
    { timestamps: true }
)

const images = new mongoose.model('images',imageSchema)

module.exports = images
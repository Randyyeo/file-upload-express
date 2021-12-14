const mongoose = require('mongoose');

const fileSchema = mongoose.Schema({
    name: { type: String, required: true },
    filename: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    userId: { type: String, required: true },
})

module.exports = mongoose.model("files", fileSchema)
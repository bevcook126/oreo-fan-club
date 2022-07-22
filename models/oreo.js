const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const oreoSchema = new Schema({
    title: String,
    releaseDate: Date,
});

module.exports = mongoose.model('Oreo', oreoSchema);
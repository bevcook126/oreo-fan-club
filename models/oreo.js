const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    content: {
        type: String
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    },
    avail: 
        [{type: Schema.Types.ObjectId, ref: 'Country'}],
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const oreoSchema = new Schema({
    title: String,
    releaseYear: Number,
    avail: [{type: Schema.Types.ObjectId, ref: 'Country'}],
    reviews: [reviewSchema],
    imgUrl: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Oreo', oreoSchema);
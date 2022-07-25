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
    countries: {
        type: String,
        enum: ['Argentina', 'Brazil' , 'Canada' , 'China' , 'Germany', 'India', 'Mexico', 'Morocco', 'Pakistan', 'Russia', 'Spain', 'United Kingdom', 'United States']
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});

const oreoSchema = new Schema({
    title: String,
    releaseDate: Date,
    reviews: [reviewSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Oreo', oreoSchema);
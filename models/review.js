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

module.exports = mongoose.model('Review', reviewSchema);
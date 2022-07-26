const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
  name: {type: String, required: true, unique: true},
  oreos: [{type: Schema.Types.ObjectId, ref: 'Oreo'}]
}, {
  timestamps: true
});

module.exports = mongoose.model('Country', countrySchema);
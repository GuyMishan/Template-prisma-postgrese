const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema

const generalSchema = new mongoose.Schema({
    name: { type: String },
    index: { type: Number },
    higherorederscheme: { type: ObjectId, ref:'HigherOrederScheme' },
});

const General = mongoose.model('General', generalSchema);

module.exports = General;


const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
  schoolName: { type: String, min: 1, max: 55, required: true },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const Institution = mongoose.model('Institution', institutionSchema);
module.exports = Institution;

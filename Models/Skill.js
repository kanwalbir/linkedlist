const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  skillName: { type: String, min: 1, max: 55, required: true },
  user: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ]
});

const Skill = mongoose.model('Skill', skillSchema);
module.exports = Skill;

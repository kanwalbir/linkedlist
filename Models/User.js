const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    firstName: { type: String, min: 1, max: 55, required: true },
    lastName: { type: String, min: 1, max: 55, required: true },
    username: {
      type: String,
      min: 1,
      max: 55,
      required: true,
      index: { unique: true }
    },
    email: {
      type: String,
      min: 1,
      max: 55,
      required: true,
      index: { unique: true }
    },
    password: { type: String, min: 1, max: 55, required: true },
    currentCompany: { type: String, min: 1, max: 55 },
    photo: { type: String }, //mongoose.SchemaTypes.Url,
    experience: [
      {
        jobTitle: { type: String },
        company: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Company'
        },
        startDate: { type: Date },
        endDate: { type: Date, default: Date.now }
      }
    ],
    education: [
      {
        institution: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Inst'
        },
        degree: String,
        endDate: { type: Date }
      }
    ],
    skills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill'
      }
    ]
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
module.exports = User;

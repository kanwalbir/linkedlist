const mongoose = require('mongoose');

const companySchema = new mongoose.Schema(
  {
    name: { type: String, min: 1, max: 55, required: true }, //Needs to be immutable
    email: { type: String, min: 1, max: 55, required: true },
    handle: { type: String, min: 1, max: 55, required: true },
    password: { type: String, min: 1, max: 55, required: true },
    logo: { type: String }, //mongoose.SchemaTypes.Url,
    employees: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    jobs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
      }
    ]
  },
  { timestamps: true }
);

const Company = mongoose.model('Company', companySchema);
module.exports = Company;

const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company"
    },
    salary: { type: Number }, //number also covers financial $
    equity: { type: Number }, //number by default takes care of both floats and integers
    applicants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ]
  },
  { timestamp: true } //creates createdAt and updatedAt
);

const Job = mongoose.model("Job", companySchema);
module.exports = Job;

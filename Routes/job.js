const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { User, Job, Company } = require("../Models");

router.get("/", function(req, res, next) {
  return Job.find().then(allJobs => {
    return res.render("jobs/index", { allJobs });
  });
});

router.get("/new", function(req, res, next) {
  return res.render("jobs/new");
});

router.get("/:job_id/edit", function(req, res, next) {
  return Job.findById(req.params.job_id)
    .populate("Company")
    .then(job => {
      return res.render("jobs/edit", { job });
    });
});

router
  .get("/:job_id", function(req, res, next) {
    return Job.findById(req.params.job_id)
      .populate("Company")
      .then(job => {
        return res.render("jobs", { job });
      });
  })
  .post("/:job_id", function(req, res, next) {
    return Job.create(req.body).then(() => {
      return res.redirect("/:job_id");
    });
  })
  .patch("/:job_id", function(req, res, next) {
    return Job.findByIdAndUpdate(req.params.job_id, req.body).then(() => {
      return res.redirect("/:job_id");
    });
  })
  .delete("/:job_id", function(req, res, next) {
    return Job.findByIdAndRemove(req.params.job_id).then(() => {
      return res.redirect("/company/:company_id");
    });
  });

router.get("/:job_id/applicants", function(req, res, next) {
  return Job.findById(req.params.job_id)
    .populate("User")
    .then(job => {
      return res.render("jobs/applicants", { job });
    });
});

router.get("/:job_id/apply", function(req, res, next) {
  return Job.findById(req.params.job_id).then(job => {
    return res.render("jobs/apply", { job });
  });
});

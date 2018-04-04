const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { User, Job, Company } = require("../Models");

router.get("/login", function(req, res, next) {
  return res.render("user/loginUser");
});

router.get("/signup", function(req, res, next) {
  return res.render("user/signup");
});

router.get("/:user_id", function(req, res, next) {
  return User.findById(req.params.user_id)
    .populate("Company", "Inst", "Skill")
    .then(user => {
      return res.render("user/connections_Jobs_Feed", { user });
    });
});

router.get("/:user_id/show", function(req, res, next) {
  return User.findById(req.params.user_id)
    .populate("Company", "Inst", "Skill")
    .then(user => {
      return res.render("user/show", { user });
    });
});

router.get("/:user_id/edit", function(req, res, next) {
  return User.findById(req.params.user_id)
    .populate("Company", "Inst", "Skill")
    .then(user => {
      return res.render("user/edit", { user });
    });
});

router.post("/:user_id/show", function(req, res, next) {
  return User.create(req.body);
});

HELLLO;

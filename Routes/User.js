const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const { User, Job, Company } = require("../Models");

router.get("/login", function(req, res, next) {
  session.set(["id"]) = user_id
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

router.get("/:user_id/edit", function(req, res, next) {
  return User.findById(req.params.user_id)
    .populate("Company", "Inst", "Skill")
    .then(user => {
      return res.render("user/edit", { user });
    });
});

router
  .get("/:user_id/show", function(req, res, next) {
    return User.findById(req.params.user_id)
      .populate("Company", "Inst", "Skill")
      .then(user => {
        return res.render("user/show", { user });
      });
  })

  .post("/:user_id/show", function(req, res, next) {
    return User.create(req.body).then(() => {
      return res.redirect("/:user_id/show");
    });
  })

  .patch("/:user_id/show", function(req, res, next) {
    return User.findByIdAndUpdate(req.params.user_id, req.body).then(user => {
      return res.redirect("/:user_id/show");
    });
  })

  .delete("/:user_id/show", function(req, res, next) {
    return User.findByIdAndRemove(req.params.user_id).then(() => {
      return res.redirect("/login");
    });
  });

router.get("/:user_id/messages", function(req, res, next) {
  return User.findById(req.params.user_id)
    .populate("Message")
    .then(user => {
      return res.render("user/listOfMessages", { user });
    });
});

router
  .get("/:user_id/applications", function(req, res, next) {
    return User.findById(req.params.user_id)
      .populate("Job").then((user) => {
        return res.render("user/listOfApplications", { user })
      })
  })

// DRAFT WILL FIX DURING AUTHENTICATION
router.patch("/:user_id/connect", function(req, res, next) {
  let connection = req.params.user_id;
  return User.findByIdUpdate(session.get(), {
    $addToSet: { connection: connection }
  }).then(() => {
    return res.redirect("/:user_id/show");
  });
});

const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/linkedlist')
  .then(function() {
    console.log('Successfully connected to database');
  })
  .catch(err => {
    console.log(err);
  });

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

exports.User = require('./User');
exports.Job = require('./Job');
exports.Skill = require('./Skill');
exports.Company = require('./Company');
exports.Inst = require('./Inst');

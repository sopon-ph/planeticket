const dbC = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbC.url;
db.register = require("./register.model.js")(mongoose);

module.exports = db;
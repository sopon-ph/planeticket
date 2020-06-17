const dbC = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbC.url;
db.register = require("./register.model.js")(mongoose);
db.flight = require('./flight.model')(mongoose);
db.seat = require('./seat.model')(mongoose);
db.promo = require('./promotion.model')(mongoose);

module.exports = db;
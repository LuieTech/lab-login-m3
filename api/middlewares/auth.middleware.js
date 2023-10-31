
const User = require("../models/user.model");
const createError = require("http-errors");

module.exports.isAuthenticated = (req, res, next) => {
  if (req.session.userId) {
    User.findById(req.session.userId).then((user) => {
      if (user) {
        req.user = user;
        next();
      } else {
        next(createError(401, "Unauthorized"));
      }
    });
  } else {
    next(createError(401, "Unauthorized"));
  }
};

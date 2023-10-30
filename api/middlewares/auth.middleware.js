// const User = require("../models/user.model")
// const createError = require('http-errors');


// module.exports.isAuthenticated = (req, res, next) => {

//   // console.log("check middleware de autenticacion", req.session.userId)

//   if (req.session.userId) {
//     User.findById(req.session.userId)
//       .then((user) => {
//         if(user){
//           // console.log("checking if user is authenticated")
//           req.user = user;
//           next();
//         } else {

//           // console.log("check if enter into error")
//           next(createError(401, "Unauthorized"));
//         }
//       })
//   } else {
//     // console.log("check si no hay userId")
//     next(createError(401, "Unauthorized"));
//   }
// }

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

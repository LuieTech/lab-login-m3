const User = require('../models/user.model')

module.exports.hello = (req, res, next) => {

  res.status(200).json( {
    "patata": "muy buena",
    "usuario": "EMAIL DEL USUARIO AUTENTICADO" 
  })

}

module.exports.create = (req, res, next) => {

  const { email, password } = req.body;

  User.create({email,password})
    .then((user) => {
      res.status(201).json(user)
    }
    ).catch((error) => next(createError(400)))
}

module.exports.login = (req, res, next) => {

  User.findOne({ email : req.body.email})
    .then((user) => {
      if (user) {
        return user.checkPassword(req.body.password)
          .then((match) => {
            if(match) {
              req.session.userId = user.id;
              res.json(user)
            } else {
              res.status(401).json({ error: "unauthorized" });
            }
          })

      } else {
        res.status(401).json({ error: "user not found" })
        
      }
    })
    .catch((error) => next(error))

}


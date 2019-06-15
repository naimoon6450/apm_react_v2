const apiRouter = require('express').Router();
const { User } = require('./db')

apiRouter.get('/users', (req, res, next) => {
    User.findAll()
    .then(resp => res.json(resp))
    .catch(next)
})


module.exports = apiRouter

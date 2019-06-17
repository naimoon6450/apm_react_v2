const apiRouter = require('express').Router();
const { User } = require('./db')

apiRouter.get('/users', (req, res, next) => {
    User.findAll()
    .then(resp => res.json(resp))
    .catch(next)
})

apiRouter.put('/users/:id', (req, res, next) => {
    const id = req.params.id;
    const mId = req.body.managerId ? req.body.managerId : null;
    // if there's a manager ID
    mId 
        ? User.findByPk(id)
            .then(user => {
                user.setManager(mId);
                res.json(`${req.body.managedUser.name} is now managed by ${req.body.managerName}`)
            })
            .catch(next)
        : User.findByPk(id)
            .then(user => {
                user.setManager(null);
                res.json(`${user.name} is not being managed`);
            })
            .catch(next);

})

module.exports = apiRouter

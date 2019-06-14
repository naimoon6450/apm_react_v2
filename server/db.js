const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/apmv2', {logging: false})

// create model here
const User = db.define('user', {
    name: {
        type: Sequelize.STRING
    }
})

// associations
User.belongsTo(User, {as: 'manager'})

// seed in different file?

// export
module.exports = {
    db,
    User
}
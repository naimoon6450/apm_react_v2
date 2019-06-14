const { db, User } = require('./server/db');

const seed = () => {
    const users = [
        User.create({name: 'Naimun'}),
        User.create({name: 'Siraj'}),
        User.create({name: 'Buyan'})
    ]
    Promise.all(users)
    .then(() => console.log('successfully seeded db...'))
    .catch(e => console.error(e))
}

db.sync({force: true})
.then(() => {
    console.log('db connected');
    seed();
})
.catch(e => console.error(e))
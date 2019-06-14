const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path')

const { db } = require('./db');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// static file usage
app.use(express.static(path.join(__dirname, '../public')))

const PORT = 8080;


db.sync()
.then(() => {
    console.log('db connected...');
    app.listen(PORT, () => {
        console.log('Server listening on 8080');
    })
})
.catch(e => console.error(e))



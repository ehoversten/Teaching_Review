require('dotenv').config();
require('./config/Auth');
const express = require('express');
const helmet = require('helmet');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// put this as far on top of the middleware stack as possible, so everything goes through this package
app.use(
    helmet({
        noCache: true,
        permittedCrossDomainPolicies: true
    })
);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
} else if (app.get('env') === 'development') {
    const logger = require('morgan');
    app.use(logger('dev'));
}

//parses data for req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//error handling
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
        message: err.message,
        status: err.status || 500,
        error: err ? err.message : err
    });
});

//using the routes
app.use(routes);

//database
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/rocketsite',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    },
    err => {
        if (err) throw err;
        console.log('Database is online & connected');
    }
);

//server listner
app.listen(PORT, () => {
    console.log(`API server is online on http://localhost:${PORT}`);
});

module.exports = app;

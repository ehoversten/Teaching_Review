const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exhbs = require('express-handlebars');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine(
    'handlebars',
    exhbs({
        defaultLayout: 'main'
    })
);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

app.listen(PORT, () => {
    console.log(`Server online on http://localhost:${PORT}`);
});

module.exports = app;

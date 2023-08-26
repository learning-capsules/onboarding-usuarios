const express = require('express');
const morgan = require('morgan');
const pkg = require('../package.json');

const app = express();
const port = process.env.PORT || 3000;

app.set('pkg', pkg);
app.use(morgan('dev'));

// Importa y monta el enrutador principal
const mainRouter = require('./routes/index');
const users = require('./routes/users');
const authRoutes = require('./routes/authRoutes');

app.use('/', mainRouter);
app.use('/users', users);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log("Server listening on", port);
});
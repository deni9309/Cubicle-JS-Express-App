const express = require('express');

const config = require('./config');

const app = express();

// require('../config/express')(app);
// require('../config/routes')(app);

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));
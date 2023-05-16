const express = require('express');

const routes = require('./routes');
const config = require('./config/config');
const setupViewEngine = require('./config/viewEngine'); // or after app initialization use only this: require('./config/viewEngine')(app);

const app = express();
setupViewEngine(app);
app.use(express.static('./src/static'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(config.port, () => console.log(`Listening on port ${config.port}...`));

const handlebars = require('express-handlebars');

function setupViewEngine(app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',  // extension for files is .hbs
        staticDir: 'static',
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
}

module.exports = setupViewEngine;

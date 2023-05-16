const db = require('../db.json');

exports.getHomePage = (req, res) => {
    res.render('index', { title: 'Home', cubes: db.cubes });
};

exports.getAboutPage = (req, res) => {
    res.render('about', { title: 'About Cubicle' });
};

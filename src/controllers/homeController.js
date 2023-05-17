const db = require('../db.json');

exports.getHomePage = (req, res) => {
    const { search, from, to } = req.query;
    let cubes = db.cubes;
    if (search) {
        cubes = cubes.filter(x => x.name.toLowerCase()
            .includes(search.toLowerCase()));
    }

    res.render('index', { title: 'Home', cubes });
};

exports.getAboutPage = (req, res) => {
    res.render('about', { title: 'About Cubicle' });
};

exports.getErrorPage = (req, res) => {
    res.render('404', { title: 'Page not Found' });
};
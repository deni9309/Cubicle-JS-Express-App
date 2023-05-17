const db = require('../db.json');

exports.getHomePage = (req, res) => {
    const { search, from: difficultyFrom, to: difficultyTo } = req.query;
    let cubes = db.cubes;

    if (search) {
        cubes = cubes.filter(x => x.name.toLowerCase()
            .includes(search.toLowerCase()));
    }

    if (difficultyFrom) {
        cubes = cubes.filter(x => x.difficultyLevel >= difficultyFrom);
    }

    if (difficultyTo) {
        cubes = cubes.filter(x => x.difficultyLevel <= difficultyTo);
    }

    res.render('index', { title: 'Home', cubes, search, difficultyFrom, difficultyTo });
};

exports.getAboutPage = (req, res) => {
    res.render('about', { title: 'About Cubicle' });
};

exports.getErrorPage = (req, res) => {
    res.render('404', { title: 'Page not Found' });
};
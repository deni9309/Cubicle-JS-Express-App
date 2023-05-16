exports.getHomePage = (req, res) => {
    res.render('index', { title: 'Home' });
};

exports.getAboutPage = (req, res) => {
    res.render('about', { title: 'About Cubicle' });
};
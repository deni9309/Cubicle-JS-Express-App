const Cube = require('../models/Cube');

exports.getCreateCube = (req, res) => {
    res.render('create', { title: 'Create Cube' });
};

exports.postCreateCube = (req, res) => {
    let cube = new Cube(req.body);

    //save data
    Cube.Save(cube);

    res.redirect('/');
};
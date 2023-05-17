const Cube = require('../models/Cube');
const db = require('../db.json');

exports.getCreateCube = (req, res) => {
    res.render('create', { title: 'Create Cube' });
};

exports.postCreateCube = (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body;

    let cube = new Cube(name, description, imageUrl, difficultyLevel);

    //save data
    Cube.save(cube);

    res.redirect('/');
};

exports.getDetails = (req, res) => {
    let cubeId = Number(req.params.cubeId);
    if (!cubeId) {
        return res.redirect('/404');  // '/' means absolute path otherwise will redirect to /details/404 and won't work
    }

    let cube = db.cubes.find(x => x.id === cubeId);

    if (!cube) {
        return res.redirect('/404');
    }

    res.render('details', {...cube})
};
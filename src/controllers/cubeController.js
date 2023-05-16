const Cube = require('../models/Cube');

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

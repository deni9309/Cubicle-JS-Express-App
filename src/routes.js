// This file is 'modular router'
const router = require('express').Router();

const cubeController = require('./controllers/cubeController');
const homeController = require('./controllers/homeController');

router.get('/', homeController.getHomePage);
router.get('/about', homeController.getAboutPage);

router.get('/create', cubeController.getCreateCube); // To use this must use named exports in cubeController
router.post('/create', cubeController.postCreateCube);

module.exports = router;
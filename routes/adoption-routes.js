const express = require('express');
const {addadoption} = require('../controllers/adoptionController');

const router = express.Router();

router.post('/adoption', addadoption);

module.exports = {
    routes: router
}
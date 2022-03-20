'use strict';

const firebase = require('../db');
const Adoption = require('../models/adoption');
const firestore = firebase.firestore();

const addadoption = async (req, res, next) => {
    try{
        const data = req.body;
        await firestore.collection('adoption').doc().set(data);
        res.send('record save');
    } catch (error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    addadoption
}
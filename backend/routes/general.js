const express = require('express');
const router = express.Router()

const { create, find, update, remove, findById} = require('../controllers/general');

// find spec 
router.get('/general/:id', findById)
//find all
router.get('/general', find)
//add 
router.post('/general', create);
//update 
router.put('/general/:generalId', update)
//delete 
router.delete('/general/:id', remove)

module.exports = router;
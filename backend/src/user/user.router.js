const express = require('express');
const router = express.Router()

const { users, signup } = require('./user.controller');

router.get('/users', users)

router.post(`/signup`, signup)

module.exports = router;
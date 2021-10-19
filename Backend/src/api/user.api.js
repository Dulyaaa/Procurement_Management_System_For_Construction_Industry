const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

module.exports = function () {
    router.post('/createUser', userController.createUser);
    router.get('/userById/:id', userController.getUserById);

    return router;
}
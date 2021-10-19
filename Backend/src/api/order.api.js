const express = require('express');
const router = express.Router();
const orderController = require('../controller/order.controller');

module.exports = function () {
    router.post('/createOrder', orderController.createOrder);
    router.get('/', orderController.getAllOrders);
    router.get('/getOrders/:id', orderController.getOrders);

    return router;
}
const express = require('express');
const router = express.Router();
const deliveryController = require('../controller/delivery.controller');

module.exports = function () {
    /**
     * @method Post
     * @description Create New Deliveries
     * @route_name  /delivery/createDelivery
     */
    router.post('/createDelivery', deliveryController.createDelivery);
    router.get('/', deliveryController.getAllDeliveries);
    router.get('/getDelivery/:id', deliveryController.getDelivery);

    return router;
}
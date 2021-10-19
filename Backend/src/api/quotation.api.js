const express = require('express');
const router = express.Router();
const quotationController = require('../controller/quotation.controller');

module.exports = function () {
    router.post('/createQuotation', quotationController.createQuotation);
    router.get('/', quotationController.getAllQuotations);
    router.get('/getQuotations/:id', quotationController.getQuotationsByUserId);

    return router;
}
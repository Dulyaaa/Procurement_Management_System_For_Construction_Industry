const express = require('express');
const router = express.Router();
const invoiceController = require('../controller/invoice.controller');

module.exports = function () {
    router.post('/createInvoice', invoiceController.createInvoice);
    router.get('/', invoiceController.getAllInvoices);
    router.get('/getInvoices/:id', invoiceController.getInvoicesByUserId);

    return router;
}
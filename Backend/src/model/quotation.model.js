const mongoose = require('mongoose');

const quotationSchema = new mongoose.Schema({
    quotationId: {
        type: String,
        required: true
    },
    estimatedAmount: {
        type: String,
        required: true
    },
    dateFrom: {
        type: String,
        required: true
    },
    dateTo: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    }
});

const Quotation = mongoose.model('quotations', quotationSchema);
module.exports = Quotation;
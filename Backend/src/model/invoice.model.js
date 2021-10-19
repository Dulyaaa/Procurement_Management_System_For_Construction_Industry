const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    orderId: {
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
    unitCost: {
        type: String,
        required: true
    },
    totalPrice: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
    },

});

const Invoice = mongoose.model('invoices', invoiceSchema);
module.exports = Invoice;
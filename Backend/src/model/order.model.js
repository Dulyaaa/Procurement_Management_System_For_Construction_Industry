const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
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
    deadline: {
        type: String,
        required: true
    },
    status: {
        type: String,
    },
    userId: {
        type: String,
    },
    // :FIXME:
    // supplierId: [
    //     {
    //         type: String,
    //         required: true
    //     }
    // ]
});

const Order = mongoose.model('orders', orderSchema);
module.exports = Order;
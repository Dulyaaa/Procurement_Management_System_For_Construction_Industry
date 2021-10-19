const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
    deliveryId: {
        type: String,
        required: true
    },
    orderId: {
        type: String,
        required: true
    },
    deliveryPerson: {
        type: String,
        required: true
    },
    deliveryPhone: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
 
});

const Delivery = mongoose.model('deliveries', deliverySchema);
module.exports = Delivery;
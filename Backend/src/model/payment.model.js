const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    chequeNo: {
        type: String,
        required: true
    },
    issuePerson: {
        type: String,
        required: true
    },
    issueTo: {
        type: String,
        required: true
    },
    issueDate: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    // userId: {
    //     type: String,
    //     required: true
    // }
    // userId: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'users' }]
});

const Payment = mongoose.model('payments', paymentSchema);
module.exports = Payment;
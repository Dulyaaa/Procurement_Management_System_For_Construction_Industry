const Payment = require('../model/payment.model');

// Make a payment
const createPayment = async (req, res) => {
    if (req.body) {
        const payment = new Payment(req.body);
        await payment.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// Get all payment details
const getAllPayments = async (req, res) => {
    await Payment.find()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

// Get payment details by user id
const getPayment = async (req, res) => {
    if (req.params && req.params.id) {
        await Payment.find({ userId: req.params.id })
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
}

module.exports = {
    createPayment,
    getAllPayments,
    getPayment
};
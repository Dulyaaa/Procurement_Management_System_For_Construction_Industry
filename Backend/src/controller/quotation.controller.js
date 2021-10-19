const Quotation = require('../model/quotation.model');

const createQuotation = async (req, res) => {
    if (req.body) {
        const order = new Quotation(req.body);
        await order.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// Get all quotation details
const getAllQuotations = async (req, res) => {
    await Quotation.find()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

// Get quotation details by user id
const getQuotationsByUserId = async (req, res) => {
    if (req.params && req.params.id) {
        await Quotation.find({ userId: req.params.id })
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
}

module.exports = {
    createQuotation,
    getAllQuotations,
    getQuotationsByUserId
};
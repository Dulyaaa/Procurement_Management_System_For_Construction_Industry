const Invoice = require('../model/invoice.model');

// Create invoice
const createInvoice = async (req, res) => {
    if (req.body) {
        const order = new Invoice(req.body);
        await order.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// Get all invoices
const getAllInvoices = async (req, res) => {
    await Invoice.find()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

// Get invoices by user id
const getInvoicesByUserId = async (req, res) => {
    if (req.params && req.params.id) {
        await Invoice.find({ userId: req.params.id })
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
}

module.exports = {
    createInvoice,
    getAllInvoices,
    getInvoicesByUserId
};
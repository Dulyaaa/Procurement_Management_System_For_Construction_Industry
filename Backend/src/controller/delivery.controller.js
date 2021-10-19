const Delivery = require('../model/delivery.model');

// Create Delivery
const createDelivery = async (req, res) => {
    if (req.body) {
        const delivery = new Delivery(req.body);
        await delivery.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// Get all delivery details
const getAllDeliveries = async (req, res) => {
    await Delivery.find()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

// Get delivery details by user
const getDelivery = async (req, res) => {
    if (req.params && req.params.id) {
        await Delivery.find({ userId: req.params.id })
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
}

module.exports = {
    createDelivery,
    getAllDeliveries,
    getDelivery
};
const Order = require('../model/order.model');

// Create new purchase order
const createOrder = async (req, res) => {
    if (req.body) {
        const order = new Order(req.body);
        await order.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// Get all orders
const getAllOrders = async (req, res) => {
    await Order.find()
        .then(data => {
            res.status(200).send({ data: data });
        })
        .catch(error => {
            res.status(500).send({ error: error.message });
        });
}

// Get orders by user id
const getOrders = async (req, res) => {
    console.log("jjfsdj", res, req);
    if (req.params && req.params.id) {
        await Order.find({userId: req.params.id})
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    getOrders
};
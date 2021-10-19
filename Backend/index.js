const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');

// Middleware
dotenv.config();
const app = express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());

// Establishing the database connection
connectDB();

// Default Path
app.route('/').get((req, res) => {
    res.send('CSSE Procurement for Construction Implementation');
});

//import routes
const userAPI = require('./src/api/user.api');
const orderAPI = require('./src/api/order.api');
const quotationAPI = require('./src/api/quotation.api');
const invoiceAPI = require('./src/api/invoice.api');
const deliveryAPI = require('./src/api/delivery.api');
const paymentAPI = require('./src/api/payment.api');

// Define routes
app.use('/user', userAPI());
app.use('/order', orderAPI());
app.use('/quotation', quotationAPI());
app.use('/invoice', invoiceAPI());
app.use('/delivery', deliveryAPI());
app.use('/payment', paymentAPI());

// Start listening to the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is up and running on PORT ${PORT}`);
})

module.exports = app;
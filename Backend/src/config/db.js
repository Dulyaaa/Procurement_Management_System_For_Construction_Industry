const mongoose = require('mongoose');
// const dbURI = 'mongodb+srv://dulya:dulya@cluster0.ksygc.mongodb.net/af_final?retryWrites=true&w=majority'
const dbURI = 'mongodb+srv://afUser001:af001@cluster0.wseiz.mongodb.net/CSSE_DB?retryWrites=true&w=majority'

const connectDB = async () => {
    await mongoose.connect(dbURI, {
        // useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: false
    }, (error) => {
        if (error) {
            console.log('Database Error: ', error.message);
        }
    });

    mongoose.connection.once('open', () => {
        console.log('Database connected.');
    });
};

module.exports = connectDB;
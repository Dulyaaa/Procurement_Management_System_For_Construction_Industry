const User = require('../model/user.model');

// Add new user
const createUser = async (req, res) => {
    if (req.body) {
        const user = new User(req.body);
        await user.save()
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}

// const getUserById = async (req, res) => {
//     if (req.params && req.params.userId) {
//         await User.findById(req.params.userId)
//             .then(data => {
//                 res.status(200).send({ data: data });
//             })
//             .catch(error => {
//                 res.status(500).send({ error: error.message });
//             })
//     }
// }

// Get user by user id
const getUserById = async (req, res) => {
    if (req.params && req.params.id) {
        await User.find({ userId: req.params.id })
            .then(data => {
                res.status(200).send({ data: data });
            })
            .catch(error => {
                res.status(500).send({ error: error.message });
            })
    }

}

module.exports = {
    createUser,
    getUserById
};
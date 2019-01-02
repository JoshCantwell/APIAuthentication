const User = require('../models/user');

module.exports = {
    signUp: async (req, res, next) => {
        console.log('UsersController.signUp() called!');

        const { email, password } = req.value.body;
        const newUser = new User({ email, password });
        await newUser.save();

        res.json({ user: 'created' });
    },
     
    signIn: async (req, res, next) => {
        // Generate token
        console.log('UsersController.signIn() called!');
    }, 

    secret: async (req, res, next) => {
        console.log('UsersController.secret() called!');
    }, 
}
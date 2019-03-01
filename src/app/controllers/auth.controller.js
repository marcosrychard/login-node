const UserService = require('../services/user.service');

module.exports = {

    async authenticate(req, res) {
        const {
            email,
            password
        } = req.body;

        const user = await UserService.findByEmail(email);

        if (!user) {
            return res.status(401).json({
                message: "User not found"
            });
        }


        if (!(await user.checkPassword(password))) {
            return res.status(401).json({
                message: "Incorrect password"
            });
        }

        return res.json({
            user,
            token: user.generateToken()
        });
    }
}
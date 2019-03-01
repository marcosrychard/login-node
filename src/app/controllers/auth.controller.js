const UserService = require('../services/user.service');

module.exports = {

    async authenticate(req, res) {
        const {
            email,
            password
        } = req.body;

        const user = await UserService.findByEmail(email);

        if (!user || !(await user.checkPassword(password))) {
            return res.status(401).json({
                message: "Senha ou email invalidos"
            });
        }

        return res.json({
            user,
            token: user.generateToken()
        });
    }
}
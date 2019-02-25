const AuthService = require('../services/auth.service');

module.exports = {

    async authenticate(req, res) {
        try {
            res.json(await AuthService.authenticate(req.body));
        } catch (error) {
            res.status(404).send({
                error
            })
        }
    }
}
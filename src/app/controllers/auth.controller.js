const AuthenticationSecurity = require('../security/authentication.security')

module.exports = {

    async authentication(req, res) {
        try {
            res.json(await AuthenticationSecurity.auth(req.body))
        } catch (error) {
            res.status(401).send({
                error
            })
        }
    }
}
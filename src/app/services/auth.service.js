const UserService = require('../services/user.service');
const jwt = require('jsonwebtoken')
module.exports = {
    async authenticate(user) {
        const result = await UserService.findByEmail(user.email);
        if (result.password === user.password) {
            const {
                name = result.name, email = result.email
            } = result
            
            const accessToken = jwt.sign({
                sub: email,
                iss: 'login-node'
            }, 'login-node')

            if (accessToken) {
                return {
                    name,
                    email,
                    accessToken
                }
            }

        } else {
            throw 'Dados invalidos';
        }

    }
}
const UserService = require('../services/user.service');

class AuthenticationSecurity {
    async auth(obj) {
        const user = await UserService.findByEmail(obj.email);

        if (user && await user.checkPassword(obj.password)) {
            const {
                name,
                email,
                accessToken = user.generateToken()
            } = user

            return {
                name,
                email,
                accessToken
            };

        } else {
            throw {
                message: "Senha ou email invalidos"
            };
        }
    }
}

module.exports = new AuthenticationSecurity();
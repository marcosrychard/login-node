const AuthController = require('../controllers/auth.controller');

module.exports = (app) => {
    app.post('/login', AuthController.authentication)
}
const UserController = require('../controllers/user.controller');
const authService = require('../security/authorization.security');
module.exports = (app) => {
    app.get('/users',  authService.authorize, UserController.findAll)
    app.get('/users/:id',  authService.isAdmin, UserController.findById);
    app.get('/users/email/:id', UserController.findByEmail);
    app.post('/users', UserController.create);
    app.put('/users/:id', UserController.update);
    app.delete('/users/:id', UserController.deleteUser);
}
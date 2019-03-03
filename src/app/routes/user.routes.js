const UserController = require('../controllers/user.controller');
const {
    authorize
} = require('../security/authorization.security');
module.exports = (app) => {
    app.get('/users', UserController.findAll)
    app.get('/users/:id', authorize('admin', 'user'), UserController.findById);
    app.get('/users/email/:id', UserController.findByEmail);
    app.post('/users', UserController.create);
    app.put('/users/:id', UserController.update);
    app.delete('/users/:id', UserController.deleteUser);
}
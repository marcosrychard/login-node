const UserController = require('../controllers/user.controller');

module.exports = (app) => {
    app.get('/users', UserController.findAll)
    app.get('/users/:id', UserController.findById);
    app.get('/users/email/:id', UserController.findByEmail);
    app.post('/users', UserController.create);
    app.put('/users/:id', UserController.update);
    app.delete('/users/:id', UserController.deleteUser);
}
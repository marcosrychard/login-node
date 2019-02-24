const UserService = require('../services/user.service');

module.exports = {

    findAll(req, res) {
        try {
            res.json(UserService.findAll());
        } catch (error) {
            res.status(404).send({
                error
            })
        }
    },

    async findById(req, res) {
        try {
            res.json(await UserService.findById(req.params.id));
        } catch (error) {
            res.status(404).send({
                error
            })
        }
    },

    create(req, res) {
        try {
            res.json(UserService.create(req.body));
        } catch (error) {
            res.status(400).send({
                error
            })
        }
    },

    update(req, res) {
        try {
            res.json(UserService.update(req.body, req.params.id));
        } catch (error) {
            res.status(400).send({
                error
            })
        }
    },

    deleteUser(req, res) {
        try {
            res.json(UserService.delete(req.params.id))
        } catch (error) {
            res.status(404).send({
                error
            })
        }
    }
}
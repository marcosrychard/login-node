const UserService = require('../services/user.service');
const { User } = require('../models');
class UserController {

    async findAll(req, res) {
        try {
            res.json(await UserService.findAll());
        } catch (error) {
            res.status(404).send({
                error
            })
        }
    }

    async findByEmail(req, res) {
        try {
            res.json(await UserService.findByEmail(req.params.id));
        } catch (error) {
            res.status(404).send({
                error
            })
        }
    }

    async findById(req, res) {
        try {
            res.json(await UserService.findById(req.params.id));
        } catch (error) {
            res.status(404).send({
                error
            })
        }
    }

    async create(req, res) {
        try {
            res.json(await UserService.create(req.body));
        } catch (error) {
            res.status(400).send({
                error
            })
        }
    }

    async update(req, res) {
        try {
            res.json(await UserService.update(req.body, req.params.id));
        } catch (error) {
            res.status(400).send({
                error
            })
        }
    }

    async deleteUser(req, res) {
        try {
            res.json(UserService.delete(req.params.id))
        } catch (error) {
            res.status(404).send({
                error
            })
        }
    }
}

module.exports = new UserController();
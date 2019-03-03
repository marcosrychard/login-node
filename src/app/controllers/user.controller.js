const UserService = require('../services/user.service');
class UserController {

    async findAll(req, res) {
        try {
            const list = await UserService.findAll({
                include: [{
                    model: 'UserProfiles',
                    as: 'profiles',
                    through: {
                        attributes: []
                    },
                }, ],
            })
            res.json();
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

            const {
                profiles,
                ...data
            } = req.body
            const user = await UserService.create(data);

            if (profiles && profiles.length > 0) {
                user.setProfiles(profiles)
            }

            res.json(user);
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
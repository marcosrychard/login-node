const {
    User
} = require('../models')
module.exports = (app) => {
    app.post('/users', async (req, res) => {
        try {
            res.json(await User.create(req.body));
        } catch (error) {
            res.status(400).send({
                error
            })
        }
    });

    app.get('/users/:id', async (req, res) => {
        try {
            res.json(await User.findById(req.params.id));
        } catch (error) {
            res.status(404).send({
                error
            })
        }

    });

    app.get('/users', async (req, res) => {
        try {
            res.json(await User.findAll());
        } catch (error) {
            res.status(404).send({
                error
            })
        }

    });

    app.put('/users/:id', async (req, res) => {
        try {
            const id = req.params.id;
            res.json(await User.update(req.body, {
                where: {
                    id
                }
            }));
        } catch (error) {
            res.status(400).send({
                error
            })
        }
    });

    app.delete('/users/:id', async (req, res) => {
        try {
            const id = req.params.id;
            res.json(await User.destroy({
                where: {
                    id
                }
            }))
        } catch (error) {
            res.status(404).send({
                error
            })
        }

    });
}
const {
    User
} = require('../models');
class UserRepository {

    findAll() {
        return User.findAll({
            include: [{
                all: true,
                through: {
                    attributes: []
                }
            }],
        });

    }

    findById(id) {
        return User.findOne({
            where: {
                id
            },
            include: [{
                all: true,
                through: {
                    attributes: []
                }
            }]
        })
    }

    findByEmail(email) {
        return User.findOne({
            where: {
                email
            },
            include: [{
                all: true,
                through: {
                    attributes: []
                }
            }]
        })
    }

    create(obj) {
        return User.create(obj);
    }

    update(id, obj) {
        return User.update(obj, {
            where: {
                id
            }
        });
    }

    delete(id) {
        return User.destroy({
            where: {
                id
            }
        })
    }
}

module.exports = new UserRepository();
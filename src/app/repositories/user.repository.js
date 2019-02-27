const {
    User
} = require('../models');

class UserRepository {

    findAll() {
        return User.findAll({
            raw: true
        })
    }

    findById(id) {
        return User.findById(id, {
            raw: true
        })
    }

    findByEmail(email) {
        return User.findOne({
            where: {
                email
            },
            raw: true
        })
    }

    create(obj) {
        return User.create(obj)
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
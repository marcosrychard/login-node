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
        return User.findOne({
            where: {
                id
            }
        })
    }

    findByEmail(email) {
        return User.findOne({
            where: {
                email
            }
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
const {
    User
} = require('../models');

module.exports = {

    findAll() {
        return User.findAll()
    },

    findById(id) {
        return User.findById(id)
    },

    create(obj) {
        return User.create(obj)
    },

    update(id, obj) {
        return User.update(obj, {
            where: {
                id
            }
        });
    },

    delete(id) {
        return User.destroy({
            where: {
                id
            }
        })
    }
}
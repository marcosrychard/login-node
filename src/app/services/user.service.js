const UserRepository = require('../repositories/user.repository')

class UserService {

    findAll() {
        return UserRepository.findAll()
    }

    findById(id) {
        return UserRepository.findById(id)
    }

    findByEmail(email) {
        return UserRepository.findByEmail(email)
    }

    create(obj) {
        return UserRepository.create(obj)
    }

    update(id, obj) {
        return UserRepository.update(obj, id);
    }

    delete(id) {
        return UserRepository.delete(id)
    }
}

module.exports = new UserService();
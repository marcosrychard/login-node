const UserRepository = require("../repositories/user.repository");

exports.authorize = (...profiles) => (req, res, next) => {
  if (req.authenticated && hasAny(req.params.id, ...profiles)) {
    next();
  } else {
    next("Esta funcionalidade é restrita");
  }
};

const hasAny = (id, ...profiles) => UserRepository
  .findById(id)
  .then(element => element.profiles
    .some(profile => profiles
      .indexOf(profile.name) !== -1)
  );
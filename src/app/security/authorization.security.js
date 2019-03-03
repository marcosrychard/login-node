exports.authorize = (req, res, next) => (...profiles) => {
    if (req.authenticated && releaseEvents.authenticated.hasAny(...profiles)) {
        next();
    }else {
        next('Esta funcionalidade é restrita')
    }
}
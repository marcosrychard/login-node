'use strict';
const jwt = require('jsonwebtoken');
const UserService = require('../services/user.service');

exports.tokenParser = (req, res, next) => {
    const token = extractToken(req)
    if (token) {
        jwt.verify(token, 'APP_SECRET', applyBearer(req, res, next))
    } else {
        next()
    }
}

const extractToken = (req) => {
    const auth = req.header('authorization');
    let token = null;
    if (auth) {
        const parts = auth.split(' ');
        token = parts.length === 2 && parts[0] === 'Bearer' ? parts[1] : null
    }
    return token;
}

const applyBearer = (req, res, next) => (error, decoded) => {
    if (decoded) {
        UserService.findByEmail(decoded.sub).then(user => {
            if (user) {
                req.authenticated = user
            }
            next()
        }).catch(next)
    } else {
        next()
    }
}
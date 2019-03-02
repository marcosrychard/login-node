'use strict';
const jwt = require('jsonwebtoken');

exports.decodeToken = async (token) => {
    const data = await jwt.verify(token, 'APP_SECRET');
    return data;
}

exports.authorize = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];

    if (!token) {
        res.status(401).json({
            message: 'Acesso Restrito'
        });
    } else {
        jwt.verify(token, 'APP_SECRET', function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                next();
            }
        });
    }
};

exports.isAdmin = function (req, res, next) {
    const token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['authorization'];

    if (!token) {
        res.status(401).json({
            message: 'Token Inválido'
        });
    } else {
        jwt.verify(token, 'APP_SECRET', function (error, decoded) {
            if (error) {
                res.status(401).json({
                    message: 'Token Inválido'
                });
            } else {
                if (decoded.roles.includes('admin')) {
                    next();
                } else {
                    res.status(403).json({
                        message: 'Esta funcionalidade é restrita para administradores'
                    });
                }
            }
        });
    }
};
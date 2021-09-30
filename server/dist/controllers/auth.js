"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
var AuthController = /** @class */ (function () {
    function AuthController() {
    }
    AuthController.prototype.login = function (req, res) {
        var username = req.body.username;
        var myUser = 'pepito';
        if (username === myUser) {
            req.session.loggedIn = true;
            return res.json({ msg: 'Bienvenido', logged: req.session.loggedIn });
        }
        return res.status(401).json({ error: 'No estas autorizado', logged: false });
    };
    AuthController.prototype.isLogged = function (req, res) {
        if (req.session.loggedIn === true) {
            return res.json({ logged: true });
        }
        return res.json({ logged: false });
    };
    AuthController.prototype.logout = function (req, res) {
        if (req.session.loggedIn === true) {
            req.session.destroy();
            return res.json({ msg: 'Sesion finalizada', logged: false });
        }
        return res
            .status(404)
            .json({ error: 'No hay una session iniciada o ya esta finalizada' });
    };
    AuthController.prototype.validateLogin = function (req, res, next) {
        if (req.session.loggedIn === true)
            next();
        else
            res.status(401).json({ error: 'No estas autorizado' });
    };
    return AuthController;
}());
exports.authController = new AuthController();

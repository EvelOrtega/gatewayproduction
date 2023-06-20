"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Library
const express_1 = require("express");
const express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
//Middleware
const authenticationMiddleware_1 = __importDefault(require("./middleware/authenticationMiddleware"));
const authorizationMiddleware_1 = __importDefault(require("./middleware/authorizationMiddleware"));
//Controllers
const MainController_1 = require("./controllers/MainController");
const RegisterController_1 = require("./controllers/RegisterController");
const LoginController_1 = require("./controllers/LoginController");
const LogController_1 = require("./controllers/LogController");
const UserController_1 = require("./controllers/UserController");
const routes = (0, express_1.Router)();
//Main
routes.get('/endpoints', (req, res) => {
    const endpoints = (0, express_list_endpoints_1.default)(routes);
    res.json(endpoints);
});
//Services Register
routes.route('/register')
    .get(new RegisterController_1.RegisterController().create);
routes.route('/googleauth')
    .get(new RegisterController_1.RegisterController().googleAuth);
routes.route('/googlecallback')
    .get(new RegisterController_1.RegisterController().googleCallback); // register in firebase and database
routes.route('/user')
    .get(authenticationMiddleware_1.default, authorizationMiddleware_1.default, new UserController_1.UserController().read)
    .put(authenticationMiddleware_1.default, authorizationMiddleware_1.default, new UserController_1.UserController().update) // atualizações
    .delete(authenticationMiddleware_1.default, authorizationMiddleware_1.default, new UserController_1.UserController().delete); // delete
routes.route('/login')
    .post(new LoginController_1.LoginController().signIn) // OK
    .get(authenticationMiddleware_1.default, authorizationMiddleware_1.default, new LoginController_1.LoginController().signInState) // OK
    .delete(authenticationMiddleware_1.default, authorizationMiddleware_1.default, new LoginController_1.LoginController().signOut); // OK
//routes.route('/trash/:param?');
routes.get('/logs', authenticationMiddleware_1.default, authorizationMiddleware_1.default, new LogController_1.LogController().read);
routes.route('/:item?/:value?')
    .post(new MainController_1.MainController().create)
    .get(new MainController_1.MainController().read)
    .put(new MainController_1.MainController().update)
    .delete(new MainController_1.MainController().delete);
exports.default = routes;

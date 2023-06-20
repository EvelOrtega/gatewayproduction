"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRepository = void 0;
const data_source_1 = require("../data-source");
const Login_1 = require("../entities/Login");
exports.loginRepository = data_source_1.AppDataSource.getRepository(Login_1.Login);

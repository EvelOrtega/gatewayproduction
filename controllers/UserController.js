"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const LogController_1 = require("./LogController");
const userRepository_1 = require("../repositories/userRepository");
const RegisterController_1 = require("./RegisterController");
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserController {
    /**
     * @param req
     * @param res
     * @param user: any
     * @param credential: any
     * @requires req.body
     * @returns res.json
     * @link //https://firebase.google.com/docs/reference/node/firebase.auth.Auth#createuserwithemailandpassword
     */
    create(req, res, credential) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield userRepository_1.userRepository.save(userRepository_1.userRepository.create({
                    "firebase_uid": credential.uid,
                    "name": req.body.name,
                    "email": req.body.email,
                    "password": yield bcrypt_1.default.hash(req.body.password, yield bcrypt_1.default.genSalt(10))
                }));
                new LogController_1.LogController().create(req, res, data, { message: 'register' });
                res.status(200).json(data);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield userRepository_1.userRepository.find();
            new LogController_1.LogController().create(req, res, data, { message: 'read user' });
            res.status(200).json(data);
        });
    }
    // Finalizar
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const register = yield new RegisterController_1.RegisterController().delete(req, res);
            try {
                const data = yield userRepository_1.userRepository.findOneBy({ id: req.body.id });
                if (!data) {
                    return res.status(404).json({ message: 'User not found' });
                }
                const deleted = yield userRepository_1.userRepository.softRemove(data);
                new LogController_1.LogController().create(req, res, data, { message: 'deleted user' });
                return res.status(201).json(deleted);
            }
            catch (error) {
                return res.status(500).json({ message: "Error delete user" });
            }
        });
    }
}
exports.UserController = UserController;

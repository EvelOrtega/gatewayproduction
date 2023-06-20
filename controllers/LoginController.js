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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const loginRepository_1 = require("../repositories/loginRepository");
const userRepository_1 = require("../repositories/userRepository");
const LogController_1 = require("./LogController");
const firebaseConfig_1 = require("../auth/firebaseConfig");
const auth_1 = require("firebase/auth");
class LoginController {
    signIn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            // https://firebase.google.com/docs/reference/node/firebase.auth.Auth#signinwithemailandpassword
            (0, auth_1.signInWithEmailAndPassword)(firebaseConfig_1.auth, email, password)
                .then((userCredential) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                //refatorar
                const user = yield userRepository_1.userRepository.findOneBy({ firebase_uid: userCredential.user.uid });
                const login = loginRepository_1.loginRepository.create({
                    "email": (_a = userCredential.user.email) === null || _a === void 0 ? void 0 : _a.toString(),
                    "firebase_uid": userCredential.user.uid,
                    "emailVerified": userCredential.user.emailVerified,
                    "accessToken": yield userCredential.user.getIdToken(),
                    "user_id": user === null || user === void 0 ? void 0 : user.id
                });
                yield loginRepository_1.loginRepository.save(login);
                new LogController_1.LogController().create(req, res, user, { message: 'User signIn' });
                // Signed in
                res.status(201).json(login);
                // ...
            }))
                .catch((error) => {
                res.status(500).json(error);
            });
        });
    }
    signOut(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, auth_1.signOut)(firebaseConfig_1.auth)
                .then(() => {
                // Corrigir auth não tem informações de usuário para gerar log
                new LogController_1.LogController().create(req, res, firebaseConfig_1.auth, { message: 'User signOut' });
                res.status(200).json({ message: "singOut" });
            })
                .catch((error) => {
                res.status(500).json(error);
            });
        });
    }
    signInState(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (firebaseConfig_1.auth.currentUser) {
                const firebase = {
                    uid: firebaseConfig_1.auth.currentUser.uid,
                    email: firebaseConfig_1.auth.currentUser.email,
                    accessToken: yield firebaseConfig_1.auth.currentUser.getIdToken()
                };
                const login = yield loginRepository_1.loginRepository.findOneBy({ firebase_uid: firebaseConfig_1.auth.currentUser.uid });
                const user = yield userRepository_1.userRepository.findOneBy({ firebase_uid: firebaseConfig_1.auth.currentUser.uid });
                new LogController_1.LogController().create(req, res, user, { message: 'User signInState' });
                res.status(200).json({ firebase, login, user });
            }
            else {
                res.status(500).json({ message: 'No authenticated user.' });
            }
        });
    }
}
exports.LoginController = LoginController;

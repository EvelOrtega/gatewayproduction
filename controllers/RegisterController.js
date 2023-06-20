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
exports.RegisterController = void 0;
const firebaseConfig_1 = require("../auth/firebaseConfig");
const auth_1 = require("firebase/auth");
const UserController_1 = require("./UserController");
const googleapis_1 = require("googleapis");
const firebaseAdmin_1 = require("../auth/firebaseAdmin");
class RegisterController {
    /**
     * @param req
     * @param res
     * @returns json
     * @link https://firebase.google.com/docs/reference/node/firebase.auth.Auth#createuserwithemailandpassword
     * @Doc https://firebase.google.com/docs/auth/web/google-signin?hl=pt-br
     */
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            (0, auth_1.createUserWithEmailAndPassword)(firebaseConfig_1.auth, req.body.email, req.body.password)
                .then((userCredential) => __awaiter(this, void 0, void 0, function* () {
                const credential = userCredential.user;
                const user = yield new UserController_1.UserController().create(req, res, credential);
            }))
                .catch((error) => {
                res.status(500).json(error);
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = firebaseConfig_1.auth.currentUser;
            if (user) {
                (0, auth_1.deleteUser)(user)
                    .then(() => {
                    return true;
                })
                    .catch((error) => {
                    res.status(404).json(error);
                });
            }
            else {
                res.status(404).json({ message: 'Not data' });
            }
        });
    }
    // Finalizar
    sendVerificationEmail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const auth = getAuth();
            const user = firebaseConfig_1.auth.currentUser;
            try {
                const data = ''; // await sendEmailVerification(user);
                res.status(201).json(data);
            }
            catch (error) {
                res.status(201).json(error);
            }
        });
    }
    // Finalizar
    sendEmailResetPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //const auth = getAuth();
            try {
                const data = yield (0, auth_1.sendPasswordResetEmail)(firebaseConfig_1.auth, req.body.email);
                res.status(201).json(data);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    /**
     *
     * @param req
     * @param res
     * @Doc https://developers.google.com/identity/oauth2/web/guides/overview?hl=pt-br
     * @Doc https://developers.google.com/identity/gsi/web/guides/display-button?hl=pt-br#javascript
     * @Console https://console.cloud.google.com/apis/credentials?project=terceiro-gestor&hl=pt-br&supportedpurview=project
     */
    googleAuth(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const authUrl = firebaseAdmin_1.googleAuth.generateAuthUrl({
                access_type: 'offline',
                scope: ['email', 'profile'],
            });
            res.redirect(authUrl);
        });
    }
    googleCallback(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code } = req.query;
            try {
                const googleAuth = new googleapis_1.google.auth.OAuth2(process.env.client_id, process.env.client_secret, process.env.redirect_uris);
                //const user = admin.auth.GoogleAuthProvider.credential(id_token)
                const { tokens } = yield googleAuth.getToken(code);
                const { id_token, access_token } = tokens;
                const oauth2Client = new googleapis_1.google.auth.OAuth2();
                oauth2Client.setCredentials({ access_token });
                const oauth2 = googleapis_1.google.oauth2({ auth: oauth2Client, version: 'v2' });
                const userInfo = yield oauth2.userinfo.get();
                // Aqui você pode retornar a resposta para o cliente ou fazer qualquer outra ação necessária
                res.status(201).json(userInfo);
            }
            catch (error) {
                console.error('Erro durante a autenticação:', error);
                res.status(500).send('Erro durante a autenticação');
            }
        });
    }
}
exports.RegisterController = RegisterController;

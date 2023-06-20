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
const firebaseConfig_1 = require("../auth/firebaseConfig");
function authenticationMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const token = req.header('Authorization');
        const user = firebaseConfig_1.auth.currentUser;
        if (!token) {
            return res.status(401).json({ message: 'Authentication token not provided' });
        }
        if (!user) {
            return res.status(401).json({ message: 'User credentials not found' });
        }
        const tokenUser = yield user.getIdToken();
        if (token === tokenUser) {
            next();
        }
        else {
            res.status(500).json({ message: 'No authenticated user.' });
        }
    });
}
exports.default = authenticationMiddleware;

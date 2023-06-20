"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const app_1 = require("firebase/app");
const auth_1 = require("firebase/auth"); // https://firebase.google.com/docs/auth/web/start?authuser=0&hl=pt
const firebaseApp = (0, app_1.initializeApp)({
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId
});
exports.auth = (0, auth_1.getAuth)(firebaseApp);

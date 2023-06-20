"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.googleAuth = void 0;
const admin = __importStar(require("firebase-admin"));
const googleapis_1 = require("googleapis");
const serviceAccount = require('./terceiro-gestor-auth-firebase-adminsdk-z46l4-f9a7d8bf0b.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
exports.googleAuth = new googleapis_1.google.auth.OAuth2(process.env.client_id, process.env.client_secret, process.env.redirect_uris);
/* if (!admin.apps.length) {
      // Caminho para o arquivo JSON da conta de serviço
      const serviceAccount = require('../auth/terceiro-gestor-auth-firebase-adminsdk-z46l4-f9a7d8bf0b.json');
      admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        // Configuração do seu projeto do Firebase
        // ...
      });
    }

    const googleAuth = new google.auth.OAuth2(
      process.env.client_id,
      process.env.client_secret,
      process.env.redirect_uris
    ); */ 

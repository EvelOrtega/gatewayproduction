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
exports.MainController = void 0;
class MainController {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //acess service
            // Aqui você pode fazer uma requisição para o serviço desejado e retornar a resposta
            // Exemplo:
            // axios.get('https://servico.com/api/dados')
            //   .then(response => res.json(response.data))
            //   .catch(error => res.status(500).json({ error: 'Internal Server Error' }));
            return res.json({
                'response': 'API Gateway',
                'method': 'POST',
                'Authorization': req.headers.authorization,
                'req': 'create',
                'body': req.body
            });
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.header;
            return res.json({
                'response': 'API Gateway',
                'method': 'GET',
                'Authorization': req.headers.authorization,
                'req': 'read',
                'params': req.params
            });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({
                'response': 'API Gateway',
                'method': 'PUT',
                'Authorization': req.headers.authorization,
                'req': 'update',
                'body': req.body
            });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            return res.json({
                'response': 'API Gateway',
                'method': 'DELETE',
                'Authorization': req.headers.authorization,
                'req': 'delete',
                'body': req.body
            });
        });
    }
    endpoint(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const listEndpoints = require('express-list-endpoints');
            let app = require('express')();
            res.json(listEndpoints(app));
        });
    }
}
exports.MainController = MainController;

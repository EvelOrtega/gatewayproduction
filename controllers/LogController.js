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
exports.LogController = void 0;
const logRepository_1 = require("../repositories/logRepository");
const xmlhttprequest_ts_1 = require("xmlhttprequest-ts");
class LogController {
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield logRepository_1.logRepository.find({
                    order: {
                        created: 'DESC'
                    }
                });
                res.status(201).json({ data });
            }
            catch (error) {
                return res.status(500).json(error);
            }
        });
    }
    findOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield logRepository_1.logRepository.findOneBy({
                    id: req.body.id //* req.params.id */
                });
                return res.status(201).json({ data });
            }
            catch (error) {
                return res.status(500).json({ message: "Internal Server Error" });
            }
        });
    }
    create(req, res, user, request) {
        return __awaiter(this, void 0, void 0, function* () {
            const header = req.headers; // header["x-forwarded-for"]
            const route = `http://ip-api.com/json/${header["x-forwarded-for"]}`; //http://ip-api.com/json/{query}
            var xhr = new xmlhttprequest_ts_1.XMLHttpRequest();
            xhr.open('GET', route, true);
            xhr.send();
            xhr.onload = function () {
                return __awaiter(this, void 0, void 0, function* () {
                    const data = logRepository_1.logRepository.create({
                        "user_id": user.id,
                        "customerInfo": xhr.responseText,
                        "requestInfo": request
                    });
                    yield logRepository_1.logRepository.save(data);
                    return data;
                });
            };
        });
    }
}
exports.LogController = LogController;

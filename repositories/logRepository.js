"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logRepository = void 0;
const data_source_1 = require("../data-source");
const Log_1 = require("../entities/Log");
exports.logRepository = data_source_1.AppDataSource.getRepository(Log_1.Log);

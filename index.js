"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const data_source_1 = require("./data-source");
const routes_1 = __importDefault(require("./routes"));
data_source_1.AppDataSource.initialize()
    .then(() => {
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use("/api", routes_1.default);
    //Correção do Railway
    const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
    const hostname = process.env.HOSTNAME || "0.0.0.0";
    app.listen(port, hostname, () => {
        console.log("API Gateway running!");
    });
})
    .catch((err) => {
    console.error("Error during Data Source initialization", err);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./Clases/server"));
const environment_1 = require("./global/environment");
const router_1 = require("./routes/router");
const cors_1 = __importDefault(require("cors"));
const bodyParser = require('body-parser');
const server = new server_1.default();
//bodyparser
server.app.use(bodyParser.urlencoded({ extended: true }));
server.app.use(bodyParser.json());
//cors
server.app.use(cors_1.default({ origin: true, credentials: true }));
//rutas de servicios
server.app.use('/', router_1.router);
server.start(() => {
    console.log(`servidor corriendo ${environment_1.SERVER_PORT}`);
});

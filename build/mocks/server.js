"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = require("msw/node");
const handlers_1 = require("./handlers");
console.log("handlers", handlers_1.handlers);
const server = (0, node_1.setupServer)(...handlers_1.handlers);
exports.default = server;

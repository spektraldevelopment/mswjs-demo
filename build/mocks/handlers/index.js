"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlers = void 0;
const user_1 = require("./user");
const allUsers_1 = require("./allUsers");
exports.handlers = [...user_1.userHandlers, ...allUsers_1.allUsersHandlers];

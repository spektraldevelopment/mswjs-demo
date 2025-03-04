"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allUsersHandlers = void 0;
const msw_1 = require("msw");
const users_json_1 = __importDefault(require("../data/users.json"));
exports.allUsersHandlers = [
    // Intercept "GET https://example.com/users" requests...
    msw_1.http.get("https://example.com/all-users", () => {
        // ...and respond to them using this JSON response.
        return msw_1.HttpResponse.json(users_json_1.default);
    }),
];

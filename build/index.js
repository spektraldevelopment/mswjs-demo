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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./mocks/server"));
server_1.default.listen();
// This is a simple Node.js application that
// does a network request and prints the response.
function app() {
    fetchUser();
    fetchAllUsers();
}
const fetchUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://example.com/user");
    const user = yield response.json();
    console.log("USER is: ", user);
});
const fetchAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch("https://example.com/all-users");
    const { users } = yield response.json();
    console.log("USERS are: ", users);
});
app();

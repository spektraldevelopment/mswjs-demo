"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userHandlers = void 0;
const msw_1 = require("msw");
exports.userHandlers = [
    // Intercept "GET https://example.com/user" requests...
    msw_1.http.get("https://example.com/user", () => {
        // ...and respond to them using this JSON response.
        return msw_1.HttpResponse.json({
            id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
            firstName: "John",
            lastName: "Maverick",
        });
    })
];

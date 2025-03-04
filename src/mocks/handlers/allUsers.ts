import { http, HttpResponse } from "msw";
import users from "../data/users.json";

export const allUsersHandlers = [
  // Intercept "GET https://example.com/users" requests...
  http.get("https://example.com/all-users", (): HttpResponse => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(users);
  }),
];

// * Note: This example file is to demostrate how to merge multiple handlers into one file.
// * This handler would be merged with the user.ts handlers in a production application.
import { http, HttpResponse, RequestHandler } from "msw";
import users from "../data/users.json";

export const allUsersHandlers: RequestHandler[] = [
  // Intercept "GET https://example.com/users" requests...
  http.get("https://example.com/all-users", (): HttpResponse => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(users);
  }),
];

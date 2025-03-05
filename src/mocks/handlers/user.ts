import { http, HttpResponse, RequestHandler } from "msw";
import data from "../data/users.json";

interface User {
  id: string;
  firstName?: string;
  lastName?: string;
}

export const userHandlers: RequestHandler[] = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://example.com/user", (): HttpResponse => {

    // * Get first user in array of users...
    const user: User = data.users[0];
    // ...and respond to them using this JSON response.
    return HttpResponse.json(user);
  }),
  http.get('https://example.com/user/:id', ({ request, params, cookies }): HttpResponse => {
    const { id } = params;

    // Find user by ID in data.users array...
    const user: User = data.users.find((user) => user.id === id)!;

    return HttpResponse.json(user);
  })
];

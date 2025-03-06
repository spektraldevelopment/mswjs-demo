import { http, HttpResponse, RequestHandler } from "msw";
import data from "../data/users.json";

interface User {
  id: string;
  firstName: string;
  lastName: string;
}

// * Assign data to a new object in order to avoid mutation.
const users = [...data.users];

export const userHandlers: RequestHandler[] = [
  // Intercept "GET https://example.com/user" requests...
  http.get("https://example.com/user", (): HttpResponse => {

    // * Get first user in array of users...
    const user: User = users[0];
    // ...and respond to them using this JSON response.
    return HttpResponse.json(user);
  }),
  http.get('https://example.com/user/:id', ({ params }): HttpResponse => {
    const { id } = params;

    // Find user by ID in users array...
    const user: User = users.find((user) => user.id === id)!;

    return HttpResponse.json(user);
  }),
  http.post('https://example.com/user', async ({ request }): Promise<HttpResponse> => {

    const req = await request.json();

    // * Extract new user from request body...
    const newUser: User = req as User;

    // * Add new user to users array...
    users.push(newUser);

    // * Respond with the new user.
    return HttpResponse.json(newUser);
  }),
  http.put('https://example.com/user/:id', async ({ request, params }): Promise<HttpResponse> => {
    const { id } = params;
    const req = await request.json();

    // Find user by ID in users array...
    const userIndex = users.findIndex((user) => user.id === id);

    // * Extract updated user from request body...
    const updatedUser: User = req as User;

    // Update user in the users array...
    users[userIndex] = updatedUser;

    return HttpResponse.json(updatedUser);
  }),
  http.delete('https://example.com/user/:id', ({ params }): HttpResponse => {
    const { id } = params;

    // Find user by ID in users array...
    const userIndex = users.findIndex((user) => user.id === id);

    // * Remove user from users array...
    users.splice(userIndex, 1);

    return HttpResponse.json({ id });
  }),
  http.get("https://example.com/users", (): HttpResponse => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json({ users });
  }),
];

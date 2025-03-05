import { RequestHandler } from "msw";
import { userHandlers } from "./user";
import { allUsersHandlers } from "./allUsers";

export const handlers: RequestHandler[] = [...userHandlers, ...allUsersHandlers];
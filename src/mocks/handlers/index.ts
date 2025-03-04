import { userHandlers } from "./user";
import { allUsersHandlers } from "./allUsers";

export const handlers = [...userHandlers, ...allUsersHandlers];
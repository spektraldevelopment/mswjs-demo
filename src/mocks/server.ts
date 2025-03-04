import { setupServer } from "msw/node";
import { handlers } from "./handlers";

console.log("handlers", handlers);

const server = setupServer(...handlers);

export default server;

import { setupServer, SetupServerApi } from "msw/node";
import { handlers } from "./handlers";

// console.log("Handlers List: ", handlers);

const server: SetupServerApi = setupServer(...handlers);

export default server;

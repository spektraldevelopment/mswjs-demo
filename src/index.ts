import server from "./mocks/server";

server.listen();

// This is a simple Node.js application that
// does a network request and prints the response.
const app = () => {
  fetchUser();
  fetchAllUsers();
}

const fetchUser = async () => {
  const response = await fetch("https://example.com/user");
  const user = await response.json();
  console.log("USER is: ", user);
};

const fetchAllUsers = async () => {
  const response = await fetch("https://example.com/all-users");
  const { users } = await response.json();
  console.log("USERS are: ", users);
};

app();

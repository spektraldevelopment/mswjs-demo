import server from "./mocks/server";

server.listen();

// This is a simple Node.js application that
// does a network request and prints the response.
const app = () => {
  fetchUser();
  fetchTestUser();
  fetchAllUsers();
}

const fetchUser = async () => {
  const response = await fetch("https://example.com/user");
  const user = await response.json();
  console.log("USER is: ", user);
};

const fetchTestUser = async () => {
  const response = await fetch("https://example.com/user/123");
  const user = await response.json();
  console.log("TEST USER is: ", user);
};

const fetchAllUsers = async () => {
  const response = await fetch("https://example.com/all-users");
  const { users } = await response.json();
  console.log("USERS are: ", users);
};

app();

import server from "./mocks/server";

server.listen();

// This is a simple Node.js application that
// does a network request and prints the response.
const app = async () => {
  fetchUser();
  fetchTestUser();
  fetchAllUsers();
  await postNewUser();
}

const log = (message: string, obj: {} | []) => {
  console.log("************************************");
  console.log(`${message}`, obj);
  console.log("************************************");
};

const fetchUser = async () => {
  const response = await fetch("https://example.com/user");
  const user = await response.json();
  log(`USER is: `, user);
};

const fetchTestUser = async () => {
  const response = await fetch("https://example.com/user/123");
  const user = await response.json();
  log(`TEST USER is: `, user);
};

const fetchAllUsers = async () => {
  const response = await fetch("https://example.com/all-users");
  const { users } = await response.json();
  log(`ALL USERS are: `, users);
};

const postNewUser = async () => {
  const response = await fetch("https://example.com/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: "566778",
      firstName: "John",
      lastName: "Foo",
    }),
  });
  const newUser = await response.json();
  log(`NEW USER is: `, newUser);
};

app();

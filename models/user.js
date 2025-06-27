const { v4: uuidv4 } = require('uuid');

const users = {};

function createUser(userData) {
  const id = uuidv4();
  const user = {
    id,
    userName: userData.userName,
    name: userData.name,
    emails: userData.emails,
    meta: {
      resourceType: 'User',
      created: new Date().toISOString(),
      lastModified: new Date().toISOString(),
    },
    schemas: ["urn:ietf:params:scim:schemas:core:2.0:User"]
  };
  users[id] = user;
  return user;
}

function getUser(id) {
  return users[id];
}

function listUsers() {
  return Object.values(users);
}

module.exports = { createUser, getUser, listUsers };
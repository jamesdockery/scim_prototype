const { v4: uuidv4 } = require('uuid');
const { listUsers } = require('./user');

const groups = {};

function createGroup(groupData){
    const id = uuidv4();
const group = {
id,
displayName: groupData.displayName,
members: groupData.members || [],
meta: {
      resourceType: 'Group',
      created: new Date().toISOString(),
      lastModified: new Date().toISOString(),
    },
    schemas: ["urn:ietf:params:scim:schemas:core:2.0:Group"]
};
groups[id] = group;
return group;
}
function getGroups(id) {
  return groups[id];
}


function listGroups() {
  return Object.values(groups);
}


module.exports = { getGroups, createGroup, listGroups };

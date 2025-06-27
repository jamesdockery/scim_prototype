const { createGroup, listGroups, getGroups } = require('../models/group');


exports.create = (req, res) => {
  const group = createGroup(req.body);
  res.status(201).json(group);
};

exports.get = (req, res) => {
  const group = getGroups(req.params.id);
  if (!group) return res.status(404).send('Group not found');
  res.json(user);
};

exports.list = (req, res) => {
  const Resources = listGroups();
  res.json({ Resources, totalResults: Resources.length, itemsPerPage: Resources.length, startIndex: 1, schemas: ["urn:ietf:params:scim:api:messages:2.0:ListResponse"] });
};
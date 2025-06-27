const { createUser, getUser, listUsers } = require('../models/user');

exports.create = (req, res) => {
  const user = createUser(req.body);
  res.status(201).json(user);
};

exports.get = (req, res) => {
  const user = getUser(req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
};

exports.list = (req, res) => {
  const Resources = listUsers();
  res.json({ Resources, totalResults: Resources.length, itemsPerPage: Resources.length, startIndex: 1, schemas: ["urn:ietf:params:scim:api:messages:2.0:ListResponse"] });
};
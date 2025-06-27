const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/users');
const groupRoutes = require('./routes/groups');

const app = express();
app.use(bodyParser.json());

app.use('/scim/v2/Users', userRoutes);
app.use('/scim/v2/Groups', groupRoutes);

app.listen(3000, () => console.log('SCIM server running on http://localhost:3000'));
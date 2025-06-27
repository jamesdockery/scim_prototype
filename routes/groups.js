const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');


router.get('/', groupController.list);
router.post('/', groupController.create);
router.get('/:id', groupController.get);

module.exports = router;
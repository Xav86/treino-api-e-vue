const express = require('express');
const router = express.Router();

/* Controllers */
const UserController = require("../controllers/UserController");
const HomeController = require('../controllers/HomeController');

/* get */
router.get('/', HomeController.oi);
router.get('/user', UserController.listUsers);
router.get('/user/:id', UserController.findUser);

/* post */
router.post('/user', UserController.create);

module.exports = router;
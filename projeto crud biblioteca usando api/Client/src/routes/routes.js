const express = require('express');
const router = express.Router();

/* Controllers */
const HomeController = require("../controllers/HomeController");

/* get */
router.get('/', HomeController.home);

/* post */
router.post('/book', HomeController.create)


module.exports = router;
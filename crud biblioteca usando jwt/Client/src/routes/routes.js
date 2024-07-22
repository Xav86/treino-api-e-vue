const express = require('express');
const router = express.Router();

/* Controllers */
const HomeController = require('../controllers/HomeController');

/* get */
router.get('/', HomeController.login);
router.get('/home', HomeController.home);

/* post */
router.post('/book', HomeController.create);
router.post('/delete', HomeController.delete);
router.post('/edit', HomeController.edit);
router.post('/auth', HomeController.auth);


module.exports = router;
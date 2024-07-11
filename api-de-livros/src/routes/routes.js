const express = require('express');
const router = express.Router();

/* Controllers */
const HomeController = require('../controllers/HomeController');
const BookController = require('../controllers/BookController');

/* get */
router.get('/', HomeController.index);
router.get('/books', BookController.list);
router.get('/book/:id', BookController.findBook)


module.exports = router;
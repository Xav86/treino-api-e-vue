const express = require('express');
const router = express.Router();

/* Controllers */
const HomeController = require('../controllers/HomeController');
const BookController = require('../controllers/BookController');

/* get */
router.get('/', HomeController.index);
router.get('/books', BookController.list);
router.get('/book/:id', BookController.findBook);

/* post */
router.post('/book', BookController.create);

/* delete */
router.delete('/book/:id', BookController.delete);

/* put */
router.put('/book/:id', BookController.update);


module.exports = router;
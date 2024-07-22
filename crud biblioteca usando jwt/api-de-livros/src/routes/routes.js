const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

/* Controllers */
const HomeController = require('../controllers/HomeController');
const BookController = require('../controllers/BookController');

/* get */
router.get('/', auth, HomeController.index);
router.get('/books', auth, BookController.list);
router.get('/book/:id', auth, BookController.findBook);

/* post */
router.post('/book', auth, BookController.create);
router.post('/login', BookController.login);

/* delete */
router.delete('/book/:id', auth, BookController.delete);

/* put */
router.put('/book/:id', auth, BookController.update);


module.exports = router;
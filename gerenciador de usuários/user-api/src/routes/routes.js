const express = require('express');
const router = express.Router();
const AdminAuth = require('../middlewares/AdminAuth');

/* Controllers */
const UserController = require("../controllers/UserController");
const HomeController = require('../controllers/HomeController');

/* get */
router.get('/', HomeController.oi);
router.get('/user', AdminAuth, UserController.listUsers);
router.get('/user/:id', AdminAuth, UserController.findUser);

/* post */
router.post('/user', UserController.create);
router.post('/recoverpassword', UserController.recoverPassword);
router.post('/changepassword', UserController.changePassword);
router.post('/login', UserController.login);
router.post('/validate', AdminAuth, HomeController.validate);

/* put */
router.put('/user', AdminAuth, UserController.edit);

/* delete */
router.delete('/user/:id', AdminAuth, UserController.remove);

module.exports = router;
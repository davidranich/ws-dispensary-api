import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController';
import { token_auth } from '../controllers/authenticationController';

router.get('/fetch', token_auth, UserController.fetch_users);

router.get('/grab/:userID', UserController.grab_user);

router.post('/register', UserController.register);

router.post('/login', UserController.login);

router.delete('/delete/:userID', UserController.delete_user);

module.exports = router;
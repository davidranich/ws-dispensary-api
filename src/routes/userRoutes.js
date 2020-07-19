import express from 'express';
const router = express.Router();
import UserController from '../controllers/userController';

router.get('/fetch', UserController.fetch_users);

router.get('/grab/:userID', UserController.grab_user);

router.post('/add', UserController.add_user);

router.delete('/delete/:userID', UserController.delete_user);

module.exports = router;
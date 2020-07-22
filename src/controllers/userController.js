import User from '../models/UserModel';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from '../server';
import notificationController from '../controllers/notificationController';

exports.fetch_users = async (req, res) => {
    try {
        const users = await User.find();
        return res.json(users);
    } catch (err) {
        return res.json({ error: err });
    }
};

exports.grab_user = async (req, res) => {
    try {
        const user = await User.findById(req.params.userID);
        return res.json(user);
    } catch (err) {
        return res.json({ error: err });
    }
};

exports.register = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const user = new User({
        Username: req.body.username,
        Password: hashedPass,
        Email: req.body.email
    });

    try {
        const savedUser = await user.save();
        notificationController.email_notification(req.body.email);
        return res.json(savedUser);
    } catch (err) {
        return res.json({ error: err });
    }
};

exports.login = async (req, res) => {
    try {
        const user = await User.findOne({ Username: req.body.username});
        if (!user) {
            return res.json('Username not found');
        }

        const validPass = await bcrypt.compare(req.body.password, user.Password);
        if (!validPass) {
            return res.json('Invalid password');
        }

        jwt.sign({ _id: user._id }, config.db.tenantSecret, (err, token) => {
            if (err) return res.json({ error: err });
            return res.json(token);
        });
    } catch (err) {
        return res.json({ error: err });
    }
};

exports.delete_user = async (req, res) => {
    try {
        const removedUser = await User.remove({ _id: req.params.userID });
        return res.json(removedUser);
    } catch (err) {
        return res.json({ error: err });
    }
};
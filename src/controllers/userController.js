import mongoose from 'mongoose';
import User from '../models/UserModel';

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

exports.add_user = async (req, res) => {
    const user = new User({
        Username: req.body.username,
        Password: req.body.password,
        Email: req.body.email,
        Role: req.body.role
    });

    try {
        const savedUser = await user.save();
        return res.json(savedUser);
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
import mongoose from 'mongoose';
import axios from 'axios';

const api_authenticate = async (config) => {
    axios.get(`http://127.0.0.1:9999/auth/${config.db.tenantKey}`)
    .then(function (response) {
    const res = response.data;
    if (res) {
        mongoose.connect(config.db.url, config.db.options, () => {
            console.log("Successfully authenticated! Connection to DB #1");
        });
    } else {
        console.log("Authentication error! Please reach out to support staff immediately.");
    }
});
};

const token_auth = async (req, res, next) => {
    try {
        const bearerHeader = req.headers['authorization'];

        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            req.token = bearerToken;
            next();
        } else {
            return res.json(`Unable to validate token, as it doesn't exist!`);
        }
    } catch (err) {
        return res.sendStatus(403);
    }
};


export { api_authenticate, token_auth };
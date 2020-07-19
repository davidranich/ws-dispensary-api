import mongoose from 'mongoose';
import axios from 'axios';

const authenticate = async (config) => {
    axios.get(`http://127.0.0.1:9999/auth/authenticate/${config.db.tenantKey}`)
    .then(function (response) {
    const res = response.data;
    if (res) {
        mongoose.connect(config.db.url, config.db.options, () => {
            console.log('Successfully authenticated! Connection to DB #1');
        });
    } else {
        console.log("Authentication error! Please reach out to support staff immediately.");
    }
});
};

export { authenticate };
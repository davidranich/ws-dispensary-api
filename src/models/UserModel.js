import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Username: { 
        type: String,
        unique: true,
        required: true
    },
    Password: {
        type: String, // obviously will handle this differently in production
        required: true
    }, 
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Phone: {
        type: String
    },
    FirstName: {
        type: String,
    },
    LastName: {
        type: String
    },
    Address: {
        type: String
    },
    City: {
        type: String
    },
    Zip: {
        type: String
    },
    State: {
        type: String
    },
    Role: {
        type: Number,
        required: true,
        enum: [0, 1, 2, 3] // 0 = inactive, 1 = user, 2 = staff, 1337 = admin / owner, 1338 = us
    },
    Permissions: [String], // "driver", "front desk"
    LicenseNumber: {
        type: String,
        default: 'n/a'
    },
    MMCardNumber: {
        type: String,
        default: 'n/a'
    },
    DateAdded: {
        type: Date,
        default: Date.now
    },
    DateModified: {
        type: Date
    }
});

module.exports = mongoose.model('user', userSchema, 'users');
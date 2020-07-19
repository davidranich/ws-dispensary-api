import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CompanySchema = new Schema({
    CompanyName: String,
    DateAdded: {
        type: Date,
        default: Date.now
    },
    LastModified: Date,
    TenantID: String
});

module.exports = mongoose.model('company', CompanySchema);
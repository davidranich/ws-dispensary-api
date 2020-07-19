import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RouteSchema = new Schema({
    EnteredBy: mongoose.Schema.Types.ObjectId,
    AddressOne: String,
    AddressTwo: String,
    City: String,
    State: String,
    Zip: Number,
    OrderID: mongoose.Schema.Types.ObjectId,
    FulfilledBy: mongoose.Schema.Types.ObjectId,
    FulfillmentReason: String,
    FulfillmentDate: Date,
    DateAdded: Date,
    CustomerID: mongoose.Schema.Types.ObjectId,
    DispatcherID: mongoose.Schema.Types.ObjectId,
    CompanyID: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('route', RouteSchema);
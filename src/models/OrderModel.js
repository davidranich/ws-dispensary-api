import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    Total: Number, // or String, who knows
    AmountReceived: Number,
    AmountReturned: Number,
    CustomerID: mongoose.Schema.Types.ObjectId,
    DateAdded: Date,
    Field: String // was unsure of what this was for, so defaulted to String,
});

module.exports = mongoose.model('order', OrderSchema);
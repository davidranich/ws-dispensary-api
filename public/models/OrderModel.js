"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var OrderSchema = new Schema({
  Total: Number,
  // or String, who knows
  AmountReceived: Number,
  AmountReturned: Number,
  CustomerID: _mongoose["default"].Schema.Types.ObjectId,
  DateAdded: Date,
  Field: String // was unsure of what this was for, so defaulted to String,

});
module.exports = _mongoose["default"].model('order', OrderSchema);
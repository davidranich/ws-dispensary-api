"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var RouteSchema = new Schema({
  EnteredBy: _mongoose["default"].Schema.Types.ObjectId,
  AddressOne: String,
  AddressTwo: String,
  City: String,
  State: String,
  Zip: Number,
  OrderID: _mongoose["default"].Schema.Types.ObjectId,
  FulfilledBy: _mongoose["default"].Schema.Types.ObjectId,
  FulfillmentReason: String,
  FulfillmentDate: Date,
  DateAdded: Date,
  CustomerID: _mongoose["default"].Schema.Types.ObjectId,
  DispatcherID: _mongoose["default"].Schema.Types.ObjectId,
  CompanyID: _mongoose["default"].Schema.Types.ObjectId
});
module.exports = _mongoose["default"].model('route', RouteSchema);
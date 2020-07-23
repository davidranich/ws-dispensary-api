"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var CompanySchema = new Schema({
  CompanyName: String,
  DateAdded: {
    type: Date,
    "default": Date.now
  },
  LastModified: Date,
  TenantID: String
});
module.exports = _mongoose["default"].model('company', CompanySchema);
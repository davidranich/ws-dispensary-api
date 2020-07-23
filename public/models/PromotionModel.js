"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var PromotionsSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Description: String,
  PercentageOff: {
    type: Number,
    required: true
  },
  DayOfWeek: {
    type: String,
    "default": null
  },
  PromotionStart: {
    type: String,
    "default": null
  },
  PromotionEnd: {
    type: String,
    "default": null
  },
  Products: {
    type: String,
    ref: 'product',
    required: true
  },
  ProductType: {
    type: [String],
    "default": null
  },
  Brand: {
    type: String,
    "default": null
  },
  DateCreated: {
    type: Date,
    "default": Date.now
  }
});
module.exports = _mongoose["default"].model('promotion', PromotionsSchema, 'promotions');
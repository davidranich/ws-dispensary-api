"use strict";

var _express = _interopRequireDefault(require("express"));

var _promotionController = _interopRequireDefault(require("../controllers/promotionController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/fetch', _promotionController["default"].fetch_promotions);
router.get('/grab/:promotionID', _promotionController["default"].grab_promotion);
router.post('/add', _promotionController["default"].add_promotion);
router["delete"]('/delete/:promotionID', _promotionController["default"].delete_promotion);
module.exports = router;
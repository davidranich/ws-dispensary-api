"use strict";

var _express = _interopRequireDefault(require("express"));

var _productController = _interopRequireDefault(require("../controllers/productController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/fetch', _productController["default"].fetch_products);
router.get('/grab/:userID', _productController["default"].grab_product);
router.post('/add', _productController["default"].add_product);
router["delete"]('/delete/:productID', _productController["default"].delete_product);
module.exports = router;
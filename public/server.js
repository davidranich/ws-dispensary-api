"use strict";

var _express = _interopRequireDefault(require("express"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

require("regenerator-runtime");

var _authenticationController = require("./controllers/authenticationController");

var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));

var _productRoutes = _interopRequireDefault(require("./routes/productRoutes"));

var _strainsRoutes = _interopRequireDefault(require("./routes/strainsRoutes"));

var _promotionsRoutes = _interopRequireDefault(require("./routes/promotionsRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = process.env.PORT || 8888;

require('dotenv').config();

app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
(0, _authenticationController.api_authenticate)();
app.use('/users', _userRoutes["default"]);
app.use('/products', _productRoutes["default"]);
app.use('/strains', _strainsRoutes["default"]);
app.use('/promotions', _promotionsRoutes["default"]);

_mongoose["default"].set('useCreateIndex', true);

app.get('/', function (req, res) {
  res.send('Welcome home!');
});
app.listen(port);
console.log("Server is running on port ".concat(port));
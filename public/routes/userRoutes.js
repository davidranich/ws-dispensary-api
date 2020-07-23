"use strict";

var _express = _interopRequireDefault(require("express"));

var _userController = _interopRequireDefault(require("../controllers/userController"));

var _authenticationController = require("../controllers/authenticationController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.get('/fetch', _authenticationController.token_auth, _userController["default"].fetch_users);
router.get('/grab/:userID', _userController["default"].grab_user);
router.post('/register', _userController["default"].register);
router.post('/login', _userController["default"].login);
router["delete"]('/delete/:userID', _userController["default"].delete_user);
module.exports = router;
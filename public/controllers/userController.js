"use strict";

var _UserModel = _interopRequireDefault(require("../models/UserModel"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _server = require("../server");

var _notificationController = _interopRequireDefault(require("../controllers/notificationController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

exports.fetch_users = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var users;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _UserModel["default"].find();

          case 3:
            users = _context.sent;
            return _context.abrupt("return", res.json(users));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", res.json({
              error: _context.t0
            }));

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.grab_user = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var user;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _UserModel["default"].findById(req.params.userID);

          case 3:
            user = _context2.sent;
            return _context2.abrupt("return", res.json(user));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.json({
              error: _context2.t0
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.register = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var salt, hashedPass, user, savedUser;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _bcryptjs["default"].genSalt(10);

          case 2:
            salt = _context3.sent;
            _context3.next = 5;
            return _bcryptjs["default"].hash(req.body.password, salt);

          case 5:
            hashedPass = _context3.sent;
            user = new _UserModel["default"]({
              Username: req.body.username,
              Password: hashedPass,
              Email: req.body.email
            });
            _context3.prev = 7;
            _context3.next = 10;
            return user.save();

          case 10:
            savedUser = _context3.sent;

            _notificationController["default"].email_notification(req.body.email);

            return _context3.abrupt("return", res.json(savedUser));

          case 15:
            _context3.prev = 15;
            _context3.t0 = _context3["catch"](7);
            return _context3.abrupt("return", res.json({
              error: _context3.t0
            }));

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[7, 15]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.login = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var user, validPass;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _UserModel["default"].findOne({
              Username: req.body.username
            });

          case 3:
            user = _context4.sent;

            if (user) {
              _context4.next = 6;
              break;
            }

            return _context4.abrupt("return", res.json('Username not found'));

          case 6:
            _context4.next = 8;
            return _bcryptjs["default"].compare(req.body.password, user.Password);

          case 8:
            validPass = _context4.sent;

            if (validPass) {
              _context4.next = 11;
              break;
            }

            return _context4.abrupt("return", res.json('Invalid password'));

          case 11:
            _jsonwebtoken["default"].sign({
              _id: user._id
            }, _server.config.db.tenantSecret, function (err, token) {
              if (err) return res.json({
                error: err
              });
              return res.json(token);
            });

            _context4.next = 17;
            break;

          case 14:
            _context4.prev = 14;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", res.json({
              error: _context4.t0
            }));

          case 17:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 14]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.delete_user = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var removedUser;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _UserModel["default"].remove({
              _id: req.params.userID
            });

          case 3:
            removedUser = _context5.sent;
            return _context5.abrupt("return", res.json(removedUser));

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            return _context5.abrupt("return", res.json({
              error: _context5.t0
            }));

          case 10:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.token_auth = exports.api_authenticate = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var api_authenticate = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _axios["default"].get("https://ws-core-api.herokuapp.com/auth/".concat(process.env.TENANT_KEY)).then(function (response) {
              var res = response.data;

              if (res) {
                _mongoose["default"].connect("".concat(process.env.DB_URL), {
                  useNewUrlParser: true,
                  useUnifiedTopology: true
                }, function () {
                  console.log("Successfully authenticated! Connection to DB #1");
                });
              } else {
                console.log("Authentication error! Please reach out to support staff immediately.");
              }
            });

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function api_authenticate() {
    return _ref.apply(this, arguments);
  };
}();

exports.api_authenticate = api_authenticate;

var token_auth = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var bearerHeader, bearer, bearerToken;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            bearerHeader = req.headers['authorization'];

            if (!(typeof bearerHeader !== 'undefined')) {
              _context2.next = 9;
              break;
            }

            bearer = bearerHeader.split(' ');
            bearerToken = bearer[1];
            req.token = bearerToken;
            next();
            _context2.next = 10;
            break;

          case 9:
            return _context2.abrupt("return", res.json("Unable to validate token, as it doesn't exist!"));

          case 10:
            _context2.next = 15;
            break;

          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", res.sendStatus(403));

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 12]]);
  }));

  return function token_auth(_x, _x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();

exports.token_auth = token_auth;
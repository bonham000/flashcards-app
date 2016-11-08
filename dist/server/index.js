'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _expressHistoryApiFallback = require('express-history-api-fallback');

var _expressHistoryApiFallback2 = _interopRequireDefault(_expressHistoryApiFallback);

var _dev = require('./config/setup/dev');

var _dev2 = _interopRequireDefault(_dev);

var _prod = require('./config/setup/prod');

var _prod2 = _interopRequireDefault(_prod);

var _env = require('./config/env');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

if (_env.NODE_ENV === 'development') {
  (0, _dev2.default)(app);
} else {
  (0, _prod2.default)(app);
}

app.use(_express2.default.static('dist/client'));
app.use((0, _expressHistoryApiFallback2.default)(_path2.default.join(__dirname, '../../dist/client/index.html')));

app.listen(_env.PORT, function (err) {
  if (err) throw err;
  console.log('Listening at port ' + _env.PORT + ' in ' + _env.NODE_ENV + ' mode, process: ' + _env.NODE_ENV);
});

exports.default = app;
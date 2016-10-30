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

var _env = require('./config/env');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// if (NODE_ENV === 'development') {
//   devConfig(app);
// } else {
//   prodConfig(app);
// }

//import devConfig from './config/setup/dev';
//import prodConfig from './config/setup/prod';
app.use(_express2.default.static('dist/client'));
app.use((0, _expressHistoryApiFallback2.default)(_path2.default.join(__dirname, '../../dist/client/index.html')));

var port = process.env.PORT || 5000;

app.listen(port, function (err) {
  if (err) throw err;
  console.log('Listening at port ' + port + ' in ' + _env.NODE_ENV + ' mode, process: ' + process.env.PORT);
});

exports.default = app;
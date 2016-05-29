var pth = require('path');
var fs = require('fs');

var readFile = function (filename, encoding, fn) {
  if (arguments.length < 3) {
    fn = arguments[1];
    encoding = 'utf-8';
  }
  fs.readFile(filename, encoding, fn);
};

var readFileSync = function (filename, encoding) {
  encoding = encoding || 'utf-8';
  return fs.readFileSync(filename, encoding);
};

var writeFile = function (filename, data, encoding, fn) {
  if (arguments.length < 4) {
    fn = arguments[2];
    encoding = 'utf-8';
  }
  fs.writeFile(filename, data, encoding, fn);
};

var writeFileSync = function (filename, data, encoding) {
  if (arguments.length < 3) {
    encoding = 'utf-8';
    data = arguments[1];
  }
  return fs.writeFileSync(filename, data, encoding);
};
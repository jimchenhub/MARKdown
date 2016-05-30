var fs = require('fs');

var readFileSync = function (filename, encoding) {
  encoding = encoding || 'utf-8';
  return fs.readFileSync(filename, encoding);
};

var filepath = "/Users/chenlvjie/Documents/GitHub/MARKdown/README.md";
var txt = readFileSync(filepath);
console.log(txt);
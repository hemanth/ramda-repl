'use strict';
var repl = require('repl'),
os = require('os'),
empty = '(' + os.EOL + ')',
R = require('ramda');
console.log('Welcome to Ramda REPL!\n');
module.exports = function() {
	repl.start({
	  'prompt': 'λ > ',
	  input: process.stdin,
	  output: process.stdout,
	  eval: function(cmd, context, fname, callback) {
	    if (cmd === empty) return callback()
	    var result = eval(cmd)
	    callback(null, result)
	  }
	});
};



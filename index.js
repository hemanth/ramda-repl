'use strict';
var os = require('os'),
empty = '(' + os.EOL + ')';
console.log('Welcome to Ramda REPL!\n');

module.exports = function() {
	var repl = require('repl').start({'prompt': 'λ > '});

	require('repl.history')(repl, process.env.HOME + '/.ramda_history');

	var R = repl.context.R = require('ramda');

	R.functions(R).forEach(function(f) {
	  repl.context[f] = R[f];
	});
};


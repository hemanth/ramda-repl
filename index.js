'use strict';
var os = require('os'),
empty = '(' + os.EOL + ')';
console.log('Welcome to Ramda REPL!\n');

module.exports = function() {
	var repl = require('repl').start({'prompt': 'λ > '});

	require('repl.history')(repl, process.env.HOME + '/.ramda_history');

	var R = repl.context.R = require('ramda');

	for (var key in R){
	  repl.context[key] = R[key];
	}
	
	var F = repl.context.fantasy =  require('ramda-fantasy');

	R.map(function(f){repl.context[f] = F[f]},R.keys(F))
};


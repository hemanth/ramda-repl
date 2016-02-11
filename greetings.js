'use strict';

var chalk = require('chalk');

var greetings = '\n' +
    chalk.magenta(' λλλλλλλλ                                                             \n') +
    chalk.magenta("λλλλλλλλλλ                                                            \n") +
    chalk.magenta("λλλλλλλλλλλλλλ                                                        \n") +
    chalk.magenta("  λλλλλλλλλλλλλ         λλλλλλλ         λλλλλλλ        λλλλλλλ        λλ    \n") +
    chalk.magenta("   λλλλ  λλλλλλλ        λλ   λλ         λλ             λλ    λ        λλ    \n") +
    chalk.magenta("  λλλλ    λλλλλλ        λλλλλλλ         λλλλλλλ        λλλλλλλ        λλ    \n") +
    chalk.magenta(' λλλλ      λλλλλ        λλ  λλλ         λλ             λλ             λλ    \n') +
    chalk.magenta("λλλλ        λλλλ        λλ   λλλ        λλλλλλλ        λλ             λλλλλλ\n") +

    chalk.gray("\n Welcome to the amazing ") +
    chalk.magenta("Ramda ") +
    chalk.gray("+ ") +
    chalk.magenta("ramda-fantasy ") +
    chalk.gray("REPL. \n");

module.exports = greetings;

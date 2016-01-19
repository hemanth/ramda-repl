'use strict';

var chalk = require('chalk');

var greetings = '\n' +
    chalk.magenta(' λλλλλλλλ                                          \n') +
    chalk.magenta("λλλλλλλλλλ                                         \n") +
    chalk.magenta("λλ λλλλλλλλλλλ                                     \n") +
    chalk.magenta("λλλλλλλλλλλλλλλ                                    \n") +
    chalk.magenta("   λλλλλλλλλλλλ      λλλλ    λλλλλ   λλλλλ    λλ   \n") +
    chalk.magenta("   λλλλ  λλλλλλ      λλ λλ   λλ      λλ λλ    λλ   \n") +
    chalk.magenta('  λλλλ    λλλλλλ     λλλλλ   λλλλλ   λλλλλ    λλ  \n') +
    chalk.magenta(" λλλλ      λλλλλ     λλ λλ   λλ      λλλλλ    λλ \n") +
    chalk.magenta("λλλλ        λλλλ     λλ λλ   λλλλλ   λλ       λλλλ \n") +

    chalk.gray("\n Welcome to the amazing ") +
    chalk.magenta("Ramda ") +
    chalk.gray("+ ") +
    chalk.magenta("ramda-fantasy ") +
    chalk.gray("REPL. \n");

module.exports = greetings;

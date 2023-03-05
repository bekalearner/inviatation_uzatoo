const chalk = require('chalk')

const errorMsg = chalk.bgKeyword('white').redBright
const warnMsg = chalk.bgKeyword('white').bgYellowBright
const successMsg = chalk.bgKeyword('green').white

module.exports = {errorMsg, successMsg, warnMsg}
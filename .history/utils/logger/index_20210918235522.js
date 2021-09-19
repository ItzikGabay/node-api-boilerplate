const log4js = require("log4js");

log4js.configure({
   appenders: { main: { type: "file", filename: "main.log" }, 'console': { type: 'console' } },
   categories: { default: { appenders: ["main", "console"], level: "debug" } }
});
/**
 * example:
logger.debug("");
logger.info("");
logger.warn("");
logger.error("");
logger.fatal("Cheese was breeding ground for listeria.");
*/
const logger = log4js.getLogger("main");


module.exports = logger;
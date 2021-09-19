const log4js = require("log4js");

/**
 * example:
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");
*/

log4js.configure({
   appenders: { main: { type: "file", filename: "main.log" }, 'console': { type: 'console' } },
   categories: { default: { appenders: ["main", "console"], level: "debug" } }
});

const logger = log4js.getLogger("main");


module.exports = logger;
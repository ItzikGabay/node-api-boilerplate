const log4js = require("log4js");

// log4s Configuration
// added console logging & file logging.
log4js.configure({
   appenders: { main: { type: "file", filename: "main.log" }, 'console': { type: 'console' } },
   categories: { default: { appenders: ["main", "console"], level: "debug" } }
});

/**
@exp logger.debug("");
@exp logger.info("");
@exp logger.warn("");
@exp logger.error("");
@exp logger.fatal("");
*/
const logger = log4js.getLogger("main");


module.exports = logger;
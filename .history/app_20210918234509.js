// Adding express
const express = require('express');
const app = express();

// Adding Dotenv
require('dotenv').config();

// Adding logging
const log4js = require("log4js");
log4js.configure({
   appenders: { cheese: { type: "file", filename: "cheese.log" } },
   categories: { default: { appenders: ["cheese"], level: "debug" } }
});

const logger = log4js.getLogger("cheese");

console.log = (msg) => logger.trace(msg);
console.log('hello')

logger.trace("Entering cheese testing");
logger.debug("Got cheese.");
logger.info("Cheese is Comté.");
logger.warn("Cheese is quite smelly.");
logger.error("Cheese is too ripe!");
logger.fatal("Cheese was breeding ground for listeria.");
// Adding Auth
// Adding Sockets
// Adding mongoose
// Adding routes

let server = app.listen(process.env.PORT_DEV, process.env.HOST_DEV, err => {
   if (err) throw err;
   const host = server.address().address;
   const port = server.address().port;
   console.error(`server listening on http://${host}/${port}`);
})
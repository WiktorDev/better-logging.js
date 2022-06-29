const { Logger, LogLevel }= require('./lib/main')

let logger = new Logger();
logger.set({date: true})

logger.log(LogLevel.ERROR, ["e", "tre"])

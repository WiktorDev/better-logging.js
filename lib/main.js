const { LogLevel } = require('./LogLevel')
const formatter = require('./formatter')
const util = require('util');

class Logger{
    constructor() {
        this.options = []
    }
    set(val) {
        if(val.date) this.options.push("date")
        if(val.scope) this.options.push("scope")
    }
    log(level, content){
        let message = formatter.logLevelFormat(level, this.options)+""+content
        console.log(message)
    }
}

module.exports = { Logger, LogLevel }

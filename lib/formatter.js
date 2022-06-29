const { LogLevel } = require('./LogLevel')

exports.logLevelFormat=(level, options)=>{
    let date = new Date()
    let format = ""
    if(options.includes("date") ){
        let formattedDate = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `
        format = format.replace (/^/,formattedDate);
    }
    switch (level){
        case LogLevel.ERROR:
            format = format+`${colours.fg.red}[x] ${colours.underscore}Error${colours.reset}:`
            break
        case LogLevel.WARNING:
            return `${formattedDate} ${colours.fg.red}[ERROR]${colours.reset}`
        case LogLevel.INFO:
            return "INFO LOG LEVEL"
        default:
            return "Invalid log level!"
    }
    return format
}

const colours = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    underscore: "\x1b[4m",
    blink: "\x1b[5m",
    reverse: "\x1b[7m",
    hidden: "\x1b[8m",

    fg: {
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        crimson: "\x1b[38m" // Scarlet
    },
    bg: {
        black: "\x1b[40m",
        red: "\x1b[41m",
        green: "\x1b[42m",
        yellow: "\x1b[43m",
        blue: "\x1b[44m",
        magenta: "\x1b[45m",
        cyan: "\x1b[46m",
        white: "\x1b[47m",
        crimson: "\x1b[48m"
    }
};
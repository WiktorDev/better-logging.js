class LogLevel {
    static ERROR = new LogLevel("ERROR")
    static WARNING = new LogLevel("WARNING")
    static INFO = new LogLevel("INFO")

    constructor(name) {
        this.name = name
    }
}

module.exports = { LogLevel }
# better-logging.js

### Instalation
```bash
npm install better-logging.js
```

### Basic usage
```js
const { Logger, LogLevel }= require('better-logging.js')
let logger = new Logger();

logger.log(LogLevel.INFO, "E")
```

### logger options
#### date: enables the display of the date next to the message
![ss1](https://cdn.wiktor.tech/files/wiktor/webstorm64_850XebbcwY.png)
```js
logger.set({date: true})
```

### Logger
![ss2](https://cdn.wiktor.tech/files/wiktor/webstorm64_R7IAS6Kcn1.png)

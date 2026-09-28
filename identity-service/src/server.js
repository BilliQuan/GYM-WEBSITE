const winston = require('winston');


//create a logger instance
const logger = winston.createLogger({
    level: process.env.NODE_ENV === 'production' ? 'info': 'debug',
    //determine the format of the log messages
    format: winston.format.combine(
        winston.format.timestamp(),
        // adding a timestamp everytime to the log messages
        winston.format.errors({stack: true}),
        //When you see an Error object being logged, pull out its message and 
        // stack trace properly and include them in the log output...i.e telling you where the error occurred."
        winston.format.splat(),
        // helping with string interpolation in log messages, allowing you to include 
        // dynamic values in your log statements.
        winston.format.json()
        // converting log messages into a structured JSON format,
        //  making it easier to parse and analyze logs programmatically.
    ),
    defaultMeta: { service: 'identity-service' },
    transports:[
        new winston.transports.Console({
            //formatting the log messages for console output
            format: winston.format.combine(
                winston.format.colorize(),
                // adding color to log messages based on their severity level, 
                // making it easier to distinguish between different types of log entries in the console.
                winston.format.simple()
            ),
        }),
        new winston.transports.File({ filename : 'error.log', level : 'error'}),
        new winston.transports.File({ filename : 'combined.log'}),
    ]
});


module.exports = logger;
import winston from 'winston'
import {Express, Request, Response, NextFunction} from 'express'

const consoleLogger = new winston.transports.Console()

const logFormatter = () => {
    const {combine, timestamp, printf} = winston.format

    return combine(
        timestamp(),
        printf((info) => {
            const {req, res}: {req: Request; res: Response} = info.message as any
            return `${info.timestamp} | ${info.level} | ${req.hostname}:${req.socket.localPort ||
                ''} | ${res.statusCode} | ${req.originalUrl}`
        })
    )
}

const errorLogger = () => {
    const errLogger = winston.createLogger({
        level: 'error',
        transports: consoleLogger,
    })

    return (err: any, req: Request, res: Response, next: NextFunction) => {
        errLogger.error({err, req, res})
        if (err.name === 'ValidationException') {
            res.status(400).send(err.message)
            next(err)
        } else {
            next(err)
        }
    }
}

const requestLogger = () => {
    const logger = winston.createLogger({
        format: logFormatter(),
        transports: consoleLogger,
    })

    return (req: Request, res: Response, next: NextFunction) => {
        logger.info({req, res})
        next()
    }
}

const InitLoggers = (app: Express) => {
    app.use(requestLogger())
    app.use(errorLogger())
    return app
}

export default InitLoggers

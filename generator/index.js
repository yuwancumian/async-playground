function* createLogger () {
    console.log("start")
    yield
    console.log("end")
}
const logger = createLogger()
logger.next()
logger.next()

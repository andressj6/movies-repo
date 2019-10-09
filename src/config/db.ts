import mongoose from 'mongoose'




const connectDb = async () => {
    const MONGO_SERVER_ADDR = process.env.MONGO_SERVER_ADDR || 'localhost'
    mongoose.set('useCreateIndex', true)
    try {
        await mongoose.connect(`mongodb://${MONGO_SERVER_ADDR}:27017/movies`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (e) {
        console.log(e) // tslint:disable-line
        process.exit()
    }
}

export default connectDb

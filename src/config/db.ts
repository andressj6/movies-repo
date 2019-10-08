import mongoose from 'mongoose'

const connectDb = async () => {
    mongoose.set('useCreateIndex', true)
    try {
        await mongoose.connect('mongodb://localhost:27017/movies', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    } catch (e) {
        console.log(e) // tslint:disable-line
        process.exit()
    }
}

export default connectDb

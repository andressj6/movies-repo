import mongoose from 'mongoose'

const connectDb = async () => {
    mongoose.set('useCreateIndex', true)
    await mongoose.connect('mongodb://localhost:27017/movies', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export default connectDb

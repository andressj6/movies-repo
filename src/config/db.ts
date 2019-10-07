import mongoose from 'mongoose'

const connectDb = () =>
    mongoose
        .connect('mongodb://localhost:27017/movies', {
            useNewUrlParser: true,
        })
        .then((result) => {
            console.log('db connected')
        })

export default connectDb

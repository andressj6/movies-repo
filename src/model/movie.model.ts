import mongoose, {Schema, Document} from 'mongoose'
import EMovieImageType from './enums/EMovieImageType'
import EMovieGenre from './enums/EMovieGenre'
import {NextFunction} from 'express'

export interface IMovie extends Document {
    title: string
    shortDescription?: string
    duration: number
    releaseDate: number
    images?: IMovieImage[]
    genres: EMovieGenre[]
}

export interface IMovieImage {
    url: string
    type: EMovieImageType
}

const genresEnumValues = Object.values(EMovieGenre)

const MovieImageSchema: Schema = new Schema({type: String, url: String})

const MovieSchema: Schema = new Schema({
    title: {type: String, required: true, unique: true},
    shortDescription: {type: String, required: true},
    duration: {type: Number, required: true},
    releaseDate: {type: Number, required: true},
    images: [MovieImageSchema],
    genres: {type: [String], enum: genresEnumValues, required: true},
})

MovieSchema.post('save', (error: any, res: any, next: NextFunction) => {
    if (error.name === 'MongoError' && error.code === 11000) {
        throw new Error(error.message)
    } else {
        next()
    }
})

export default mongoose.model<IMovie>('Movie', MovieSchema)

import Movie, {IMovie} from '../model/movie.model'
import {ICreateMovieApiRequest} from '../model/movie.api'

export default class MovieController {
    createMovie = (movieData: ICreateMovieApiRequest): Promise<IMovie> => {
        const newMovie = new Movie({...movieData})
        return newMovie.save()
    }
}

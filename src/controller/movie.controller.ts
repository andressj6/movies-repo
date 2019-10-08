import Movie from '../model/movie.model'
import {ICreateMovieApiRequest} from '../model/movie.api'

const DEFAULT_PAGE_SIZE = 10

const DEFAULT_PAGE = 0

export default class MovieController {
    createMovie = async (movieData: ICreateMovieApiRequest) => {
        const newMovie = await new Movie({...movieData}).save()
        return newMovie
    }

    getMovies = async (page: number, search?: string) => {
        const searchTerm = search ? {title: new RegExp(`${search}.*`, 'i')} : {}

        const movieList = await Movie.find(searchTerm)
            .skip(page ? (page - 1) * DEFAULT_PAGE_SIZE : DEFAULT_PAGE)
            .limit(DEFAULT_PAGE_SIZE)
        return movieList
    }

    getMovieById = async (movieId: string) => {
        const movie = await Movie.findById(movieId)
        return movie
    }
}

import Movie, {IMovie} from '../model/movie.model'

const DEFAULT_PAGE_SIZE = 10

const DEFAULT_PAGE = 0

export default class MovieController {
    createMovie = async (movieData: IMovie) => {
        try {
            const newMovie = await new Movie({...movieData}).save()
            return newMovie
        } catch (error) {
            throw error
        }
    }

    getMovies = async (page: number, search?: string) => {
        const searchTerm = search ? {title: new RegExp(`${search}.*`, 'i')} : {}

        const movieList = await Movie.find(searchTerm)
            .skip(page ? (page - 1) * DEFAULT_PAGE_SIZE : DEFAULT_PAGE)
            .limit(DEFAULT_PAGE_SIZE)
            .exec()
        return movieList
    }

    getMovieById = async (movieId: string) => {
        try {
            const movie = await Movie.findById(movieId).exec()
            return movie
        } catch (e) {
            return null
        }
    }

    deleteMovie = async (movieId: string) => {
        const count = await Movie.deleteOne(movieId).exec()
        return count.ok!
    }
}

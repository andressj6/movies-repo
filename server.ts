import express from 'express'
import connectDb from './src/config/db'
import MovieController from './src/controller/movie.controller'
import {ICreateMovieApiRequest} from './src/model/movie.api'
import {ObjectId} from 'bson'

const app = express()
app.use(express.json())
const port = 3000

connectDb()

const movieController = new MovieController()

app.post('/movies', (req, res) => {
    const movie = req.body as ICreateMovieApiRequest
    movieController
        .createMovie({...movie})
        .then((m) => {
            res.send(m)
        })
        .catch((error) => {
            res.send(error)
        })
})

app.get('/movies', (req, res) => {
    const {page, search} = req.query
    movieController
        .getMovies(page, search)
        .then((movies) => {
            res.send(movies)
        })
        .catch((error) => {
            res.send(error)
        })
})

app.get('/movies/:id', (req, res) => {
    const id = req.params.id
    movieController
        .getMovieById(id)
        .then((movie) => res.send(movie))
        .catch((error) => {
            res.send(error)
        })
})

app.listen(port, () => console.log(`App listening on port ${port}`)) // tslint:disable-line

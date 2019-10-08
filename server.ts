import express from 'express'
import connectDb from './src/config/db'
import InitLoggers from './src/config/logger'
import MovieController from './src/controller/movie.controller'
import {IMovie} from 'model/movie.model'

const app = InitLoggers(express())
app.use(express.json())

const port = 3001

connectDb()

const movieController = new MovieController()

app.post('/movies', (req, res) => {
    movieController
        .createMovie(req.body as IMovie)
        .then((movie) => {
            res.send(movie)
        })
        .catch((error) => {
            res.status(400).send(error.message)
        })
})

app.get('/movies', (req, res) => {
    const {page, search} = req.query
    movieController.getMovies(page, search).then((movies) => {
        res.send(movies)
    })
})

app.get('/movies/:id', (req, res) => {
    const id = req.params.id
    movieController.getMovieById(id).then((movie) => {
        if (!movie) {
            res.status(404).send('Movie not Found')
        } else {
            res.send(movie)
        }
    })
})

app.patch('/movies/:id', (req, res) => {
    const id = req.params.id

    movieController.updateMovie(id, req.body as IMovie).then((result) => {
        if (!result) {
            res.status(404).send('Movie not Found')
        } else {
            res.send(`Updated entries: ${result.ok}`)
        }
    })
})

app.delete('/movies/:id', (req, res) => {
    const id = req.params.id
    const count = movieController.deleteMovie(id)
    if (count) {
        res.send(`Movie deleted: ${id}`)
    } else {
        res.send(`No movie found with id ${id}`)
    }
})

app.listen(port, () => console.log(`App listening on port ${port}`)) // tslint:disable-line

import express from 'express'
import connectDb from './src/config/db'
import MovieController from './src/controller/movie.controller'
import {ICreateMovieApiRequest} from './src/model/movie.api'

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

app.listen(port, () => console.log(`Applistening on port ${port}`)) // tslint:disable-line

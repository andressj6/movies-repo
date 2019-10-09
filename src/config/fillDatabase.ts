import connectDb from '../config/db'
import MoviesController from '../controller/movie.controller'
import {IMovie} from '../model/movie.model'

const movies = [
    {
        title: 'velit aute',
        shortDescription:
            'irure id est in do ea magna exercitation ut esse reprehenderit cillum voluptate dolor enim sit minim laborum occaecat fugiat',
        duration: 180,
        releaseDate: 2012,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['adventure'],
    },
    {
        title: 'sint dolore',
        shortDescription:
            'proident minim irure fugiat dolor ullamco nulla proident amet pariatur deserunt labore fugiat aute laboris aliqua eu reprehenderit eu Lorem',
        duration: 114,
        releaseDate: 2019,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['action'],
    },
    {
        title: 'consequat officia',
        shortDescription:
            'enim exercitation occaecat proident voluptate tempor amet pariatur veniam ad nostrud Lorem nisi tempor anim dolore labore enim sunt nisi',
        duration: 107,
        releaseDate: 1973,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['suspense'],
    },
    {
        title: 'aute consequat',
        shortDescription:
            'proident qui duis reprehenderit consequat excepteur proident et exercitation tempor velit laboris nulla duis do cillum nulla quis eiusmod ad',
        duration: 124,
        releaseDate: 1978,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['suspense'],
    },
    {
        title: 'pariatur pariatur',
        shortDescription:
            'proident laborum eiusmod nisi elit pariatur exercitation reprehenderit consectetur amet sit anim enim exercitation sint reprehenderit anim irure incididunt sint',
        duration: 154,
        releaseDate: 1989,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['animation'],
    },
    {
        title: 'proident dolor',
        shortDescription:
            'laboris dolor amet proident proident veniam incididunt pariatur ex id ea duis laborum Lorem nulla reprehenderit irure anim nulla nulla',
        duration: 161,
        releaseDate: 1983,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['suspense'],
    },
    {
        title: 'est dolore',
        shortDescription:
            'exercitation elit quis culpa ipsum laboris non est aliquip sit elit aliquip nulla labore irure dolor laboris id commodo fugiat',
        duration: 84,
        releaseDate: 2010,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['animation'],
    },
    {
        title: 'laborum cillum',
        shortDescription:
            'anim excepteur officia Lorem do magna in reprehenderit veniam enim ut id voluptate tempor sint dolore do ut excepteur id',
        duration: 132,
        releaseDate: 1976,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['suspense'],
    },
    {
        title: 'aliquip culpa',
        shortDescription:
            'cillum aliqua do elit labore consectetur in esse minim ipsum irure cupidatat consequat consectetur nisi ex aliqua est aliqua aliqua',
        duration: 107,
        releaseDate: 1986,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['animation'],
    },
    {
        title: 'exercitation fugiat',
        shortDescription:
            'sint quis nisi id nulla cillum do duis laboris aute incididunt ut duis est nulla excepteur eiusmod quis nostrud magna',
        duration: 174,
        releaseDate: 2011,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['adventure'],
    },
    {
        title: 'et est',
        shortDescription:
            'ipsum nostrud Lorem fugiat deserunt consequat quis eiusmod anim enim ad amet officia pariatur ipsum sunt laboris consequat ullamco fugiat',
        duration: 94,
        releaseDate: 2016,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['suspense'],
    },
    {
        title: 'elit nisi',
        shortDescription:
            'laborum elit consequat cillum velit veniam culpa ut eiusmod ex veniam minim cupidatat sint aute aute exercitation voluptate ipsum deserunt',
        duration: 99,
        releaseDate: 1989,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['animation'],
    },
    {
        title: 'Lorem mollit',
        shortDescription:
            'et minim esse nulla do id nisi excepteur laborum sint eiusmod velit nostrud enim ut dolore eu reprehenderit aliqua tempor',
        duration: 121,
        releaseDate: 2016,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['suspense'],
    },
    {
        title: 'et deserunt',
        shortDescription:
            'incididunt in Lorem dolore magna nisi aliqua in est ea proident voluptate fugiat voluptate duis irure nostrud amet nisi sunt',
        duration: 114,
        releaseDate: 2011,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['comedy'],
    },
    {
        title: 'laboris dolore',
        shortDescription:
            'reprehenderit duis Lorem magna est qui duis consequat culpa cillum nisi labore sint esse ut fugiat sit labore ullamco labore',
        duration: 109,
        releaseDate: 1995,
        images: [
            {
                type: 'cover',
                url: 'http://placehold.it/32x32',
            },
            {
                type: 'poster',
                url: 'http://placehold.it/64x64',
            },
        ],
        genres: ['comedy'],
    },
]

connectDb()

const controller = new MoviesController()

const fillDatabase = async () => {
    for (let m in movies) {
        if (movies[m]) {
            try {
                const movie = await controller.createMovie(movies[m] as IMovie).then()
                console.log(`Inserted movie ${movie.title} - id: ${movie.id}`) // tslint:disable-line
            } catch (e) {
                console.log('this script already ran on the database') // tslint:disable-line
                process.exit(0)
            }
        }
    }
    process.exit(0)
}

fillDatabase()

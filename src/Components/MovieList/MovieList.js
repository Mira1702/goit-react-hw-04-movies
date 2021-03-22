import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import MoviePageQuary from '../MoviePageQuery/MoviePageQuery';
import routes from '../../routes';

class MovieList extends Component {
    state = {
        movies: [],
        location: null,        
    }

    render() {
        const { movies, location } = this.state;
        return (
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={{
                            pathname: `${routes.movies}/${movie.id}`,
                            state: { from: location }
                           }}>
                            {movie.original_title}                            
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default MovieList;
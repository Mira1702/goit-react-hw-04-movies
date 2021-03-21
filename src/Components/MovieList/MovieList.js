import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MoviePageQuary from '../MoviePageQuery/MoviePageQuery';

class MovieList extends Component {
    state = {
        movies: [],
        location: null,
    }

    render() {
        const { movies } = this.state;
        return (
            <ul>
                {movies.map(({ id, title }) => (
                    <li key={id}>
                        <Link to=''>{title}
                            {/* <MoviePageQuary                                
                                title={movie.title}
                            /> */}
                        </Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default MovieList;
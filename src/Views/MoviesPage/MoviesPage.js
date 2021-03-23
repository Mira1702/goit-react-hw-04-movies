import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { getMoviesList } from '../../Servieces/Api';
import routes from '../../routes';


class MoviesPage extends Component {
    state = {
        movies: [],
        query: '',
    }
    
    SearchMovies = event => {
        event.preventDefault();
        getMoviesList(this.state.query).then(({results}) => {
            this.setState({movies: results });
        })
    }

    handleForm = event => {
        this.setState({ query: event.target.value })
    }

    render() {
        const { movies, query } = this.state;
        return (
            <>                
                <form onSubmit={this.SearchMovies}>
                    <input
                        type="text"
                        autoComplete="true"
                        onChange={this.handleForm}
                        value={query}
                    />
                    <button type="submit" onSubmit={this.SearchMovies}>Search</button>
                </form>
                <ul>
                    {movies.length > 0 &&
                        movies.map((movie) => (
                            <li key={movie.id}>
                                <NavLink
                                    to={{
                                        pathname: `${routes.movies}/${movie.id}}`,
                                        state: this.props.location.state,
                                    }}
                                >
                                    {movie.original_title}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
            </>
        )
    }
}

export default MoviesPage;
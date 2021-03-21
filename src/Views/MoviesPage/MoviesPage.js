import React, { Component } from 'react';
import { getMoviesList } from '../../Servieces/Api';
import queryString from 'query-string';
import MovieList from '../../Components/MovieList/MovieList';

class MoviesPage extends Component {
    state = {
        searchQuery: '',
        movies: [],
    };
    
    componentDidMount() {        
        const query = this.getQueryFromProps(this.props);
            if (query) {
                this.SearchMovies(query);
            }
  }

    componentDidUpdate(prevProps, prevState) {
        const prevQuery = this.getQueryFromProps(prevProps);
        const nextQuery = this.getQueryFromProps(this.props);

        if (prevQuery !== nextQuery) {
            this.SearchMovies(nextQuery);
        }
    }

    getQueryFromProps = props => queryString.parse(props.location.search).query;

    SearchMovies = searchQuery => {
        getMoviesList(searchQuery).then(({ results }) =>
           this.setState({ movies: results }),
        );
    };

    SearchMoviesText = searchText => {        
        this.setState({
            searchQuery: searchText,
            movies: [],
        });

        this.props.history.push({
           pathname: this.props.location.pathname,
           search: `query=${searchText}`,
        });
    };

    formSubmit = event => {
        event.preventDefault();
    }

    

    render() {
        const { movies } = this.state;
        return (
            <>
                <h1>Cтраница поиска фильмов по ключевому слову</h1>
                <form onSubmit={this.SearchMoviesText}>
                    <input
                        type="text"
                        autoComplete="true"                        
                    ></input>
                    <button type="submit" onSubmit={this.formSubmit}>Search</button>
                </form>
                <MovieList movies={movies} />
                {/* <ul>
                    {movies.map(movie => 
                        <li key={movie.id}>{movie.id}</li>)}
                </ul> */}
            </>
        )
    }
}

export default MoviesPage;
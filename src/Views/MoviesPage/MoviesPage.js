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
        const queryParams = queryString.parse(this.props.location.search);
        if (queryParams.searchQuery) {
            getMoviesList(queryParams.searchQuery).then(queryMovies => 
                this.setState({movies: queryMovies}))
        }
    }

    handleForm = event => {
        this.setState({
            query:event.target.value
        })
    }
    
    SearchMovies = event => {
        event.preventDefault();
        getMoviesList(this.state.query).then(queryMovies => {
            this.props.history.push({ search: `?query=${this.state.query}` });
            this.setState({ movies: queryMovies, query: '' });
        });
    }   

    render() {
        const { movies } = this.state;
        return (
            <>
                <h1>Cтраница поиска фильмов по ключевому слову</h1>
                <form onSubmit={this.SearchMovies}>
                    <input
                        type="text"
                        autoComplete="true"
                        onInput={this.handleInput}
                        value={this.state.query}
                    />
                    <button type="button" onClick={this.SearchMovies}>Search</button>
                </form>
                {movies && (<MovieList movies={movies} location={this.props.location} />)}                                
            </>
        )
    }
}

export default MoviesPage;
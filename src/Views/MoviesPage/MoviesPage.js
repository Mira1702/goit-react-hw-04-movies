import React, { Component } from 'react';
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';

class MoviesPage extends Component {
    state = {
        movies: [],
    };

    

    async componentDidMount() {
        const key = '1f52abca7d472783260f83a60d04a4c4';
        const response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false`);
        console.log(response.data)
        console.log('Hello')

        this.setState({movies: response.data})
    }

    render() {
        return (
            <>
                <h1>Cтраница поиска фильмов по ключевому слову</h1>
                <SearchBar />
                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>{movie.title}</li>
                    ))}
                </ul>
            </>
        )
    }
}

export default MoviesPage;
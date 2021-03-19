import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class HomePage extends Component {
    state = {
        movies: [],
    };    

    async componentDidMount() {
        const key = '1f52abca7d472783260f83a60d04a4c4';
        const response = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`);
        // console.log(response)

        this.setState({movies: response.data.results})
    }

    render() {
        console.log(this.props.match.url)
        return (
            <>
                <h1>Список популярных фильмов на сегодня</h1>
                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id}>
                            <Link to={`${this.props.match.url}${movie.id}`}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default HomePage;
import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import axios from 'axios';

class MovieDetailsPage extends Component {
    state = {        
        poster_path: null,
        id: null,
        title: null,
        genres: [],
        overview: null,
        vote_average: null,
    }

    async componentDidMount() {
        const key = '1f52abca7d472783260f83a60d04a4c4';
        const { movieId } = this.props.match.params;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}`);
        // console.log(response.data)

        this.setState({...response.data})
    }

    render() {
        const { poster_path } = this.state;
        return (
            <>
                <h1>Страница одного фильма{this.props.match.params.movieId}</h1>
                <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" width="100" height="100" />
                <h2>{this.state.title}</h2>
                <p>User score: {this.state.vote_average}</p>
                <p>Overview: {this.state.overview}</p>
                <p>Genre:
                    <ul>
                        {this.state.genres.map(genre => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </p>
                <h3>Additional Information</h3>
                <ul>
                    <li><NavLink to={`${this.props.match.url}/cast`}>Cast</NavLink></li>
                    <li><NavLink to={`${this.props.match.url}/reviews`}>Reviews</NavLink></li>                    
                </ul>
                <Route path={`${this.props.match.path}/cast`} component={Cast} />
                <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
            </>
        )
    }
}

export default MovieDetailsPage;
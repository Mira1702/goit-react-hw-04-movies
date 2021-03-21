import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import axios from 'axios';
import styles from './MovieDetailsPage.module.css';

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
                <div className={styles.MDPContainer}>
                    <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt="" width="200" height="200" />
                    <div className={styles.Container}>
                        <h2>{this.state.title}</h2>
                        <p>User score: {this.state.vote_average}</p>
                        <p><h3>Overview</h3>{this.state.overview}</p>
                        <p><h4>Genre</h4>
                            <ul className={styles.Genre}>
                                {this.state.genres.map(genre => (
                                    <li key={genre.id} className={styles.GenreItem}>{genre.name}</li>
                                ))}
                            </ul>
                        </p>
                    </div>
                </div>
                <div className={styles.AddInf}>
                    <h4>Additional Information</h4>
                    <ul>
                        <li className={styles.AddInfItem}>
                            <NavLink to={`${this.props.match.url}/cast`} className={styles.AddInfItem}>
                                Cast
                            </NavLink>
                        </li>
                        <li className={styles.AddInfItem}>
                            <NavLink to={`${this.props.match.url}/reviews`} className={styles.AddInfItem}>
                                Reviews
                            </NavLink>
                        </li>
                    </ul>
                    <Route path={`${this.props.match.path}/cast`} component={Cast} />
                    <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
                </div>
            </>
        )
    }
}

export default MovieDetailsPage;
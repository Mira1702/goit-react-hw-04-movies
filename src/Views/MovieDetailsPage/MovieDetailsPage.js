import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import { getMovieDetails } from '../../Servieces/Api';
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

    componentDidMount() {
        const { movieId } = this.props.match.params;
        getMovieDetails(movieId).then(data =>
        this.setState({...data}))
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
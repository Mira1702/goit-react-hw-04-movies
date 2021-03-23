import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getTrandingFilms } from '../../Servieces/Api';
import styles from './HomePage.module.css';

class HomePage extends Component {
    state = {
        movies: [],
    };   

    componentDidMount() {
        getTrandingFilms().then(({results}) => 
            this.setState({movies: results}))
    }

    render() {
        // console.log(this.props.match.url)
        return (
            <>
                <h1 className={styles.HomePageHeder}>Trending today</h1>
                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id} className={styles.HomePageNavigationItem}>
                            <Link to={`/movies/${movie.id}`} className={styles.NavigationItem}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default HomePage;
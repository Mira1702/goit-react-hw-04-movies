import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './HomePage.module.css';

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
        // console.log(this.props.match.url)
        return (
            <>
                <h1 class={styles.HomePageHeder}>Trending today</h1>
                <ul>
                    {this.state.movies.map(movie => (
                        <li key={movie.id} className={styles.HomePageNavigationItem}>
                            <Link to={`${this.props.match.url}${movie.id}`} className={styles.NavigationItem}>{movie.title}</Link>
                        </li>
                    ))}
                </ul>
            </>
        )
    }
}

export default HomePage;
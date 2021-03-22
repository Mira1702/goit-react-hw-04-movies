import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { getMoviesList } from '../../Servieces/Api';
import queryString from 'query-string';

class MoviesPage extends Component {
    state = {
        movies: [],
        query: '',        
    }

    componentDidMount() {
        const queryParams = queryString.parse(this.props.location.search);
        if (queryParams.query) {
            getMoviesList(queryParams.query).then(queryMovies =>
                this.setState({movies: queryMovies}))
        }
    }

    SearchMovies = event => {
        event.preventDefault();
        getMoviesList(this.state.query).then(results => {
            // this.props.history.push({ search: `?query=${this.state.query}` });
            this.setState({...results});        
        })
    }

    handleForm = event => {
        this.setState({ query: event.target.value})
    }

    render() {
        const { movies, query } = this.state;
        return (
            <>
                <h1>Cтраница поиска фильмов по ключевому слову</h1>
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
                    {movies &&
                        movies.length > 0 &&
                        movies.map((movie) => (
                            <li key={movie.id}>
                                <NavLink
                                    to={{
                                        pathname: `/movies/${String(movie.id)}`,
                                        state: { query, movies },
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


// import MovieList from '../../Components/MovieList/MovieList';

// function MoviesPage({ history, location }) {
//     const [query, setQuery] = useState(
//         queryString.parse(location.search).query
//     );

//     const [movies, setMoveis] = useState(
//         location.state ? location.state.movies : []
//     );
    
//     // componentDidMount() {        
//     //     const queryParams = queryString.parse(this.props.location.search);
//     //     if (queryParams.query) {
//     //         getMoviesList(queryParams.query).then(queryMovies => 
//     //             this.setState({movies: queryMovies}))
//     //     }
//     // }

//     const handleForm = (event) => {
//         setQuery(event.target.value)
//     }

    
//     // SearchMovies = event => {
//     //     event.preventDefault();
//     //     getMoviesList(this.state.query).then(queryMovies => {
//     //         this.props.history.push({ search: `?query=${this.state.query}` });
//     //         this.setState({ movies: queryMovies, query: '' });
//     //     });
//     // }   

//     const SearchMovies = (event) => {
//         event.preventDefault();
//         history.push({
//             ...location,
//             search: `?query=${query}`,
//         });
//         getMoviesList(query).then(({ results }) => {
//             setMovies(results)
//         })
//     }

    
        
//     return (
//         <>
//             <h1>Cтраница поиска фильмов по ключевому слову</h1>
//             <form onSubmit={SearchMovies}>
//                 <input
//                     type="text"
//                     autoComplete="true"
//                     onChange={handleForm}
//                     value={query}
//                 />
//                 <button type="submit" onSubmit={SearchMovies}>Search</button>
//             </form>
//             <ul>
//                 {movies &&
//                     movie.length > 0 &&
//                     movies.map((movie) => (
//                         <li key={movie / id}>
//                             <NavLink
//                                 to={{
//                                     pathname: `/movies/${String(movie.id)}`,
//                                     state: { query, movies },
//                                 }}
//                             >
//                                 {movie.original_title}
//                             </NavLink>
//                         </li>
//                     ))
//                 }
//             </ul>
//             {/* {movies && (<MovieList movies={movies} location={this.props.location} />)}                                 */}
//         </>
//     )
    

// }
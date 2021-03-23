import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import HomePage from './Views/HomePage/HomePage';
import MoviesPage from './Views/MoviesPage/MoviesPage';
import MovieDetailsPage from './Views/MovieDetailsPage/MovieDetailsPage';
import routes from './routes';
import styles from './App.module.css';


const App = () => (
  <>
      <ul className={styles.MainNavigation}>
        <li className={styles.MainNavigationItem}>
          <NavLink exact to="/" className={styles.NavigationItem}>Home</NavLink>
        </li>
        <li className={styles.MainNavigationItem}>
          <NavLink to="/movies" className={styles.NavigationItem}>Movies</NavLink>
        </li>        
      </ul>
      <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Redirect to={routes.home} />
      </Switch>      
  </>
)

export default App;

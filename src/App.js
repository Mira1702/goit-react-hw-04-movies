import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';
import HomePage from './Views/HomePage/HomePage';
import MoviesPage from './Views/MoviesPage/MoviesPage';
import MovieDetailsPage from './Views/MovieDetailsPage/MovieDetailsPage';
import NotFound from './Views/NotFound/NotFound';
import styles from './App.module.css';

// import Cast from './Views/Cast';
// import Reviews from './Views/Reviews';

const App = () => (
  <>
      <ul className={styles.MainNavigation}>
        <li className={styles.MainNavigationItem}>
          <NavLink exact to="/" className={styles.NavigationItem}>Home</NavLink>
        </li>
        <li className={styles.MainNavigationItem}>
          <NavLink to="/movies" className={styles.NavigationItem}>Movies</NavLink>
        </li>
        {/* <li>
          <NavLink to="/movies/:movieId" className={styles.MainNavigationItem}>Movie Details Page</NavLink>
        </li> */}
      </ul>
      <Switch>
        <Route exact path="/" component={HomePage} />       
        <Route exact path="/movies" component={MoviesPage} />
        <Route path="/:movieId" component={MovieDetailsPage} />
        <Route component={NotFound} />
      </Switch>      
  </>
)

export default App;

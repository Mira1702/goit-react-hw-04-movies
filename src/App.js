import React, {lazy, Suspense} from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import SpinnerLoader from './Components/Loader';
import routes from './routes';
import styles from './App.module.css';

const HomePage = lazy(() => import('./Views/HomePage/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./Views/MoviesPage/MoviesPage' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('./Views/MovieDetailsPage/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */));


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
    <Suspense fallback={<SpinnerLoader />}>
      <Switch>
      <Route exact path={routes.home} component={HomePage} />
      <Route path={routes.movieDetailsPage} component={MovieDetailsPage} />
      <Route exact path={routes.movies} component={MoviesPage} />
      <Redirect to={routes.home} />
      </Switch>
    </Suspense>
  </>
)

export default App;
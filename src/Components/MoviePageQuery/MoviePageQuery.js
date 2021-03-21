import React from 'react';
import { Link } from 'react-router-dom';

const MoviePageQuary = (movie) => (
  <ul>
    <li key={movie.id}>
      <Link to={`${this.props.match.url}${movie.id}`}>{movie.title}</Link>
    </li>
  </ul>
);

export default MoviePageQuary;
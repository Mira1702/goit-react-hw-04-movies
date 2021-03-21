import React, { Component } from 'react';
import axios from 'axios';

class Reviews extends Component {
    state = {
        reviews: [],
    }

    async componentDidMount() {
        const key = '1f52abca7d472783260f83a60d04a4c4';
        const { movieId } = this.props.match.params;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${key}&language=en-US`);
        
        this.setState({ reviews: response.data.results })
        // console.log(response.data.results)
    }

    render() {
        return (
            <ul>                
                {this.state.reviews.map(review => (                    
                    <li key={review.id}>
                        {review ? (
                            <div>
                                <p>Author: {review.author}</p>
                                <p>{review.content}</p>
                            </div>
                        ) : `We don't have any reviews for this movie`}                        
                    </li>
                ))}                
            </ul>            
        )
    }
}

export default Reviews;
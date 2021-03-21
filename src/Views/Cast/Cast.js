import React, { Component } from 'react';
import axios from 'axios';

class Cast extends Component {
    state = {
        cast: []
    }

    async componentDidMount() {
        const key = '1f52abca7d472783260f83a60d04a4c4';
        const { movieId } = this.props.match.params;
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`);
        

        this.setState({ cast: response.data.cast })
        console.log(response.data.cast)
    }

    render() {
        return (
            <ul>                
                {this.state.cast.map(item => (                    
                    <li key={item.id}>                        
                        {item.profile_path ? (
                            <img src={`https://image.tmdb.org/t/p/w200/${item.profile_path}`} alt="photo" width="50" height="100" />
                        ) :null}
                        <p>{item.name}</p>
                        <p>Character: {item.character}</p>
                        </li>
                ))}                
            </ul>            
        )
    }
}

export default Cast;

{/* <img src={`https://image.tmdb.org/t/p/w300/${profile_path}`} alt="" width="100" height="100" />
                <p>{this.state.name}</p>
                <p>Character: {this.state.character}</p> */}
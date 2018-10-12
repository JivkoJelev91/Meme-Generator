import React, { Component } from 'react';
import './App.css';
import arr from './imagesData';

class Gallery extends Component {
    constructor(props) {
        super(props);
      }

      render() {
        return (
                <div className="ThumbWrapper">
                    {
                        arr.map(res => {
                            return  <img 
                                     onClick={this.props.setImage} 
                                     className="thumbn" 
                                     key={res.id} 
                                     src={require(`./meme-pictures/${res.name}`)} 
                                     alt={res.id}/>
                        })
                    }
                </div>
        )
    }

}

export default Gallery;
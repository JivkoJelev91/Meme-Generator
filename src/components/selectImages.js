import React, { Component } from 'react';
import arr from '../resources/imagesData';
import '../styles/App.css';

class SelectImage extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handleChange}>
                    {
                    arr.map(img => {
                        return <option key={img.id} value={img.name}>
                                    Image{img.id}
                               </option>
                    }) 
                    }
                </select>
            </div>
        );
    }
}

export default SelectImage;
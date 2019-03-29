import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/App.css';

class TextPicture extends Component {
    render() {
        return (
            <div className="pictureContainer">
                <div className="topText" 
                     style={
                     {fontSize: this.props.fontSize + 'px',  
                     "color": this.props.color}}>
                     {this.props.topText}
                </div>
                <img className="memePictures"
                     src={require(`../meme-pictures/${this.props.value}`)} 
                     alt={this.props.value.match(/\d+/)[0]}/>
                <div className="bottomText" 
                     style={{fontSize: this.props.fontSize + 'px', 
                     "color": this.props.color}}>
                    {this.props.bottomText}
                </div>
            </div>
        );
    }
}

TextPicture.propTypes = {
    fontSize: PropTypes.number,
};

export default TextPicture;
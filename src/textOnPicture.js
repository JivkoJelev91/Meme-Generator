import React, { Component } from 'react';
import './App.css';
import arr from './imagesData';


class TextPicture extends Component {
    constructor(props) {
        super(props);
      }

      render() {
        return (
            <div className="pictureContainer">
                <div className="topText" 
                     style={{fontSize: this.props.fontSize + 'px',  
                             "color": this.props.color}}>
                    {this.props.topText}
                </div>
                <img src={require(`./meme-pictures/${this.props.value}`)} 
                     className="memePictures"/>
                <div className="bottomText" 
                     style={{fontSize: this.props.fontSize + 'px', 
                     "color": this.props.color}}>
                    {this.props.bottomText}
                </div>
            </div>
        );
      }
}

export default TextPicture;
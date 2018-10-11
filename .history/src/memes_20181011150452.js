import React, { Component } from 'react';
import './App.css';
import arr from './imagesData';

class Memes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'picture1.jpg',
          topText: "",
          bottomText: "",
          topFontSize: 33, 
          bottomFontSize: 0, 
          active : false
        };
      }

    handleChange = (event) => {
        this.setState({ 
            value: event.target.value,
            active: false,
        });
    }

    handleInput = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value ,
            active:false
        });

    }

    handleFontSize = () => {
        console.log(this.state.topFontSize);
    }

    

    generate = () => {

        console.log(this.state.topFontSize);

        // this.setState({ 
        //     topFontSize: this.state.topFontSize,
        //     bottomFontSize: this.state.bottomFontSize,
        //     active:false
        // });
        this.setState({
            active: true
        });
    }

    render() {
        return (
            <div>
            <div className="wrapper">
                <div className="form">
                    <div>
                        <select onChange={this.handleChange}>
                            {
                            arr.map(img => {
                                return <option key={img.id} value={img.name}>
                                            Image{img.id}
                                       </option>
                            }) 
                            }
                        </select>
                    </div>
                    <div>
                        <label>Top text</label>
                        <input type="text" name="topText" onChange={this.handleInput}/>
                        <label>Font Size Top Text</label>
                        <input type="number" name="topFontSize" onChange={this.handleFontSize}/>
                    </div>
                    <div>
                        <label>Bottom text</label>
                        <input type="text" name="bottomText" onChange={this.handleInput}/>
                        <label>Font Size Bottom Text</label>
                        <input type="number" name="bottomFontSize" onChange={this.handleFontSize}/>
                    </div>
                    <div>
                        <button 
                            onClick={this.generate}>
                            GENERATE MEME
                        </button>
                    </div>
            </div>
            <div className="pictureContainer">
                <div className="topText" style={{fontSize: this.state.topFontSize + 'px'}}>
                    { this.state.active ? this.state.topText:  "" }
                </div>
                <img src= {require(`./meme-pictures/${this.state.value}`)} className="memePictures"/>
                <div className="bottomText">
                    { this.state.active ? this.state.bottomText : "" }
                </div>
            </div>
         </div>
         <footer>Copyright © meme-generator</footer>
         </div>
        );
      }
}

export default Memes;


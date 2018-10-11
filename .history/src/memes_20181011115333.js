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
          active : false
        };
      }

    handleChange = (event) => {
        this.setState({ 
            value: event.target.value,
        });
    }
    handleInput = (event) => {
        this.setState({ 
            [event.target.name]: event.target.value ,
            active:false
        });
    }

    generate = () => {
        this.setState({
            active: true
        });
    }

    render() {

        console.log(arr);

        return (
            <div>
            <div className="wrapper">
                <div className="form">
                    <div>
                        <select onChange={this.handleChange}>
                            {
                                arr.map(img => {
                                    return <option value={img.name}>picture1</option>
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Top text</label>
                        <input type="text" name="topText" onChange={this.handleInput}/>
                    </div>
                    <div>
                        <label>Bottom text</label>
                        <input type="text" name="bottomText" onChange={this.handleInput}/>
                    </div>
                    <div>
                        <button onClick={this.generate}>GENERATE MEME</button>
                    </div>
            </div>
            <div className="pictureContainer">
                <div className="topText">
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


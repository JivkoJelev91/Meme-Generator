import React, { Component } from 'react';
import './App.css';

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

        return (
            <div>
            <div className="wrapper">
                <div className="form">
                    <div>
                        <select onChange={this.handleChange}>
                            <option value="picture1.jpg">picture1</option>
                            <option value="picture2.jpg">picture2</option>
                            <option value="picture3.jpg">picture3</option>
                            <option value="picture4.jpg">picture4</option>
                            <option value="picture5.jpg">picture5</option>
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


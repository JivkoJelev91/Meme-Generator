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
                            <option value="picture1.jpg">picture1</option>
                            <option value="picture2.jpg">picture2</option>
                            <option value="picture3.jpg">picture3</option>
                            <option value="picture4.jpg">picture4</option>
                            <option value="picture5.jpg">picture5</option>

                            <option value="picture6.jpg">picture1</option>
                            <option value="picture7.jpg">picture2</option>
                            <option value="picture8.jpg">picture3</option>
                            <option value="picture9.jpg">picture4</option>
                            <option value="picture10.jpg">picture5</option>

                            <option value="picture11.jpg">picture1</option>
                            <option value="picture12.jpg">picture2</option>
                            <option value="picture13.jpg">picture3</option>
                            <option value="picture14.jpg">picture4</option>
                            <option value="picture15.jpg">picture5</option>

                            <option value="picture16.jpg">picture1</option>
                            <option value="picture17.jpg">picture2</option>
                            <option value="picture18.jpg">picture3</option>
                            <option value="picture19.jpg">picture4</option>
                            <option value="picture20.jpg">picture5</option>

                            <option value="picture21.jpg">picture1</option>
                            <option value="picture22.jpg">picture2</option>
                            <option value="picture23.jpg">picture3</option>
                            <option value="picture24.jpg">picture4</option>
                            <option value="picture25.jpg">picture5</option>

                            <option value="picture26.jpg">picture1</option>
                            <option value="picture27.jpg">picture2</option>
                            <option value="picture28.jpg">picture3</option>
                            <option value="picture29.jpg">picture4</option>
                            <option value="picture30.jpg">picture5</option>
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


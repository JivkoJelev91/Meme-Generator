import React, { Component } from 'react';
import './App.css';
import arr from './imagesData';
import html2canvas from 'html2canvas';


class Memes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'picture1.jpg',
          topText: "",
          bottomText: "",
          fontSize: 33, 
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

    handleFontSize = (event) => {
        if(event.target.value != undefined){
            this.setState({
                fontSize: event.target.value,
                active: false
            });
        }
        if(!event.target.value || event.target.value > 99){
            this.setState({
                fontSize: 33
            })
        }
    }

    generate = (event) => {
        this.setState({
            active: true
        });
    }

    componentWillMount(){

        var pictureContainer = document.getElementsByClassName('pictureContainer')[0];
        var memePictures = document.getElementsByClassName('memePictures')[0];


        html2canvas(pictureContainer , {
            onrendered: function(canvas) {
                var theCanvas = canvas;
                document.body.appendChild(canvas);

                // Convert and download as image 
                html2canvas.Canvas2Image.saveAsPNG(canvas); 
                memePictures.appendChild(canvas);
                // Clean up 
                //document.body.removeChild(canvas);
            }
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
                    </div>
                    <div>
                        <label>Bottom text</label>
                        <input type="text" name="bottomText" onChange={this.handleInput}/>
                        <label>Change Font Size</label>
                        <input type="number" name="fontSize" onChange={this.handleFontSize}/>
                    </div>
                    <div>
                        <button 
                            onClick={this.generate}>
                            GENERATE MEME
                        </button>
                    </div>
            </div>
            <div className="pictureContainer">
                <div className="topText" 
                     style={{fontSize: this.state.fontSize + 'px'}}>
                    { this.state.active ? this.state.topText:  "" }
                </div>
                <img src= {require(`./meme-pictures/${this.state.value}`)} className="memePictures"/>
                <div className="bottomText" 
                     style={{fontSize: this.state.fontSize + 'px'}}>
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


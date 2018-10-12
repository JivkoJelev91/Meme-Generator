import React, { Component } from 'react';
import './App.css';
import arr from './imagesData';
import html2canvas from 'html2canvas';
import Gallery from './gallery';


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
        if(event.target.value !== undefined){
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

    generate = async () => {
        await this.downloadImage();
        await this.setState({
            active: true,
            topText: "",
            bottomText: ""
        });
        
    }

    setImage = (event) => {
        this.setState({
            value: `picture${event.target.alt}.jpg`
        })
    }

    downloadImage(){
        html2canvas(document.querySelector(".pictureContainer"))
            .then(canvas => {
            var a = document.createElement('a'); 
            document.body.appendChild(a); 
            a.download = "image.png"; 
            a.href =  canvas.toDataURL()
            a.click();
        });
    }

    render() {
        return (
            <div>
            <div className="wrapper">
                <Gallery setImage={this.setImage}/>
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
                        <input type="text" name="topText" value={this.state.topText} onChange={this.handleInput}/>
                    </div>
                    <div>
                        <label>Bottom text</label>
                        <input type="text" name="bottomText" value={this.state.bottomText} onChange={this.handleInput}/>
                        <label>Change Font Size</label>
                        <input type="number" value={this.state.fontSize} name="fontSize" onChange={this.handleFontSize}/>
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
                    {this.state.topText}
                </div>
                <img src= {require(`./meme-pictures/${this.state.value}`)} className="memePictures"/>
                <div className="bottomText" 
                     style={{fontSize: this.state.fontSize + 'px'}}>
                    {this.state.bottomText}
                </div>
            </div>
         </div>
         <footer>Copyright © meme-generator</footer>
         </div>
        );
      }
}

export default Memes;


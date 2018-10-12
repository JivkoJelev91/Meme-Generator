import React, { Component } from 'react';
import './App.css';
import arr from './imagesData';
import html2canvas from 'html2canvas';
import Gallery from './gallery';
import ColorPicker from 'rc-color-picker';
import TextPicture from './textOnPicture';
import 'rc-color-picker/assets/index.css';


class Memes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          value: 'picture1.jpg',
          topText: "",
          bottomText: "",
          fontSize: 33, 
          pages: 10,
          active : false,
          color:"white"
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
            bottomText: "",
            color: 'white'
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
    changeHandler = (colors) => {
        this.setState({
            color:colors.color
        })
      }
      
     closeHandler = (colors) => {
        return colors;
      }

    render() {
        return (
            <div>
            <div className="wrapper">
                <Gallery 
                    setImage={this.setImage}
                    pages={this.state.pages}/>
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
                        <div className="colorPicker">
                            <div>Pick color</div>
                            <ColorPicker
                                color={'#36c'}
                                alpha={30}
                                onChange={this.changeHandler}
                                onClose={this.closeHandler}
                                placement="topLeft"
                                className="some-class">
                                <div className="rc-color-picker-trigger"></div>
                            </ColorPicker>
                        </div>
                    </div>
                    <div>
                        <button 
                            onClick={this.generate}>
                            DOWNLOAD
                        </button>
                    </div>
            </div>
            <TextPicture 
                fontSize={this.state.fontSize}
                color={this.state.color}
                topText={this.state.topText}
                bottomText={this.state.bottomText}
                value={this.state.value} />
         </div>
         <footer>Copyright © meme-generator</footer>
         </div>
        );
      }
}

export default Memes;


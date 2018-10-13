import React, { Component } from 'react';
import './App.css';
import arr from './imagesData';


class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: this.props.pages,
            buttonText: 'LOAD MORE MEME',
        }
      }

      loadMore = () => {
          let sumPages = this.state.pages + this.props.pages;
          let substractPages = this.state.pages - this.props.pages;
          if(sumPages >= arr.length){
              this.setState({
                buttonText: "HIDE MEME",
                pages: substractPages 
              });
          }
          if(this.state.buttonText === 'LOAD MORE MEME'){
            this.setState({
                pages: sumPages 
            });
          }
          if(this.state.buttonText === 'HIDE MEME'){
            if(substractPages <= this.props.pages){
                this.setState({
                    buttonText: 'LOAD MORE MEME' 
                });
            }
            this.setState({
                pages: substractPages 
            });
          }
      }

      render() {
        return (
                <div className="ThumbWrapper">
                    {
                        arr.map((res, index) => {
                            if(index < this.state.pages){
                                return <img 
                                onClick={this.props.setImage} 
                                className="thumbn" 
                                key={res.id} 
                                src={require(`./meme-pictures/${res.name}`)} 
                                alt={res.id}/>
                            }
                        })
                    }
                    <div>
                        <button 
                            style={{width:'200px'}}
                            onClick={this.loadMore}>
                            {this.state.buttonText}
                        </button>
                    </div>
                </div>
        )
    }
}

export default Gallery;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import arr from '../resources/imagesData';
import '../styles/App.css';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: this.props.pages,
            buttonText: 'LOAD MORE MEME',
        }
      }
      sumAndSubstract(){
        let sumPages = this.state.pages + this.props.pages;
        let substractPages = this.state.pages - this.props.pages;
        return [sumPages, substractPages];
      }

      loadMore = () => {
          let [sumPages, substractPages] = this.sumAndSubstract();
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
                                src={require(`../meme-pictures/${res.name}`)} 
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

Gallery.propTypes = {
    pages: PropTypes.number,
    buttonText: PropTypes.string
};

export default Gallery;
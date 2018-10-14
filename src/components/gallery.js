import React from 'react';
import ImageGallery from 'react-image-gallery';
import arr from '../resources/imagesData';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import "react-image-gallery/styles/css/image-gallery.css";

class Gallery extends React.Component {
    render() {
      return (
          <div className="gallery" >
            <ImageGallery items={arr} 
              onClick={this.props.setImage}
              onMouseOver={this.props.setImage}/>
          </div>
      );
    }
  }
export default Gallery;
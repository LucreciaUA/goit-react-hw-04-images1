import React, { Component } from "react";
import css from './ImageGalleryItem.module.css'
import { Modal } from "components/modal/modal";
import PropTypes from 'prop-types';

export class ImageGalleryItem extends Component {
    constructor(props) {
    super(props);

    this.state = {
      isModal: false,
    };
  }

    
     openModal = () => {
    this.setState(({ isModal }) => ({
      isModal: !isModal,
    }));
     };
    
    
    render() {
    const { image } = this.props;
    const { isModal } = this.state;
    return(
        
            <li className={css.galleryItem} >
            <img src={image.webformatURL} alt={image.tags} onClick={this.openModal}/>
            {isModal && (
            <Modal
              largeImageURL={image.largeImageURL}
              tags={image.tags}
              onClose={this.openModal}
            />
          )}
        </li>
   
    )}
}




ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
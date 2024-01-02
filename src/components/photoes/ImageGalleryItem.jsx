import React, { useState } from "react";
import css from './ImageGalleryItem.module.css'
import { Modal } from "components/modal/modal";
import PropTypes from 'prop-types';

export const ImageGalleryItem =({image})=> {
    

  const [isModal, setIsModal] = useState(false)

    
    const openModal = () => {
    setIsModal(({ isModal }) => ({
      isModal: !isModal,
    }));
     };
    
    
    return(
        
            <li className={css.galleryItem} >
            <img src={image.webformatURL} alt={image.tags} onClick={openModal}/>
            {isModal && (
            <Modal
              largeImageURL={image.largeImageURL}
              tags={image.tags}
              onClose={openModal}
            />
          )}
        </li>
   
    )
}




ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
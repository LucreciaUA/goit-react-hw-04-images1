import React, { useState } from "react";
import css from './ImageGalleryItem.module.css'
import { Modal } from "components/modal/modal";


export const ImageGalleryItem =({image})=> {
    

  const [isModal, setIsModal] = useState(false)

    
    const openModal = () => {
    setIsModal(prev=>!prev);
     };
    
    
    return(
        
            <li className={css.galleryItem} >
            <img src={image.webformatURL} alt={image.tags} onClick={openModal}/>
            {isModal && (
            <Modal
              largeImageURL={image.largeImageURL}
              tags={image.tags}
              onClose={setIsModal}
            />
          )}
        </li>
   
    )
}





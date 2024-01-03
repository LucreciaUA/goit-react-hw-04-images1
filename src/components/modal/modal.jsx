import React, { useEffect } from "react";
import css from './modal.module.css';


export const Modal = ({largeImageURL, tags, onClose }) => {
  useEffect(() => {
    const keyDown = (event) => {
    if (event.code === 'Escape') {
      onClose(); 
    }
  };
      window.addEventListener('keydown', keyDown);
    document.body.classList.add('no-scroll');
    return () => {
      window.removeEventListener('keydown', keyDown);
      document.body.classList.remove('no-scroll');
    }
  },[onClose])
  

  
  

  const imageClick = (e) => {
    e.stopPropagation();
  };


    

    return (
      <>
        <div className={css.overlay} onClick={onClose}>
          <div
            className={(css.modal, css.close)}
            onClick={imageClick}
          >
            <img src={largeImageURL} alt={tags} />
          </div>
        </div>
      </>
    );
  }







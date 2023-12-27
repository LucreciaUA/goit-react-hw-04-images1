import React from "react";
import css from './modal.module.css'

export const Modal = ({image, onClose}) => {
    return (
        <div className={css.overlay}>
            <button type="button" className={css.close} onClick={()=>onClose()}>X</button>
            <div className={css.modal}>
                <img src={image.largeImageURL} alt={image.id} />
            </div>
            
        </div>
    )
}
import React from "react";
import css from './ImageGalleryItem.module.css'

export const ImageGalleryItem = ({hits, onImgClick}) => {
    return(
        hits && hits.map(image => {
                const { id, webformatURL, tags } = image;
                return (
                    <li key={id} className={css.galleryItem} onClick={()=>onImgClick(image)} >
                        <img src={webformatURL} alt={tags} />
                    </li>
                );
            })
    )
}
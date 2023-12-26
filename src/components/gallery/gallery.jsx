import { ImageGalleryItem } from "components/photoes/ImageGalleryItem";
import React from "react";
import css from './gallery.module.css'

export const Gallery = ({hits, onImgClick}) => {
    return (
        <ul className={css.gallery}>
            <ImageGalleryItem hits={hits}
            onImgClick={onImgClick} />
        </ul>
    )
}
import { ImageGalleryItem } from "components/photoes/ImageGalleryItem";
import React from "react";
import css from './gallery.module.css'


export const Gallery = ({hits}) => {
    return (
        <ul className={css.gallery}>
            {hits.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
        </ul>
    )
}


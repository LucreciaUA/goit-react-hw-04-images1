import { ImageGalleryItem } from "components/photoes/ImageGalleryItem";
import React from "react";
import css from './gallery.module.css'
import PropTypes from 'prop-types';

export const Gallery = ({hits}) => {
    return (
        <ul className={css.gallery}>
            {hits.map(image => (
          <ImageGalleryItem key={image.id} image={image} />
        ))}
        </ul>
    )
}

Gallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
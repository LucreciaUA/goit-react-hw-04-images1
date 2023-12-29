import { ImageGalleryItem } from "components/photoes/ImageGalleryItem";
import React from "react";
import css from './gallery.module.css'
import PropTypes from 'prop-types';
import { nanoid } from "nanoid";

export const Gallery = ({hits}) => {
    return (
        <ul className={css.gallery}>
            {hits.map(image => (
          <ImageGalleryItem key={nanoid()} image={image} />
        ))}
        </ul>
    )
}

Gallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
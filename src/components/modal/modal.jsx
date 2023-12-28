import React, { Component } from "react";
import css from './modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
      window.addEventListener('keydown', this.keyDown);
      document.body.classList.add('no-scroll');
  }
  componentWillUnmount() {
      window.removeEventListener('keydown', this.keyDown);
      document.body.classList.remove('no-scroll');
  }

  
  keyDown = (event) => {
    if (event.code === 'Escape') {
      this.props.onClose(); 
    }
  };

  imageClick = (e) => {
    e.stopPropagation();
  };

  render() {
    const { largeImageURL, tags, onClose } = this.props;

    return (
      <>
        <div className={css.overlay} onClick={onClose}>
          <div
            className={(css.modal, css.close)}
            onClick={this.imageClick}
          >
            <img src={largeImageURL} alt={tags} />
          </div>
        </div>
      </>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};





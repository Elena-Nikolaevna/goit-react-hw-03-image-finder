import PropTypes from 'prop-types';
import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Component } from 'react';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }

  handleEsc = evt => {
    if (evt.code === 'Escape') {
      this.props.onCloseModal();
    }
  };

  render() {
    const { onCloseModal, imageUrl, alt } = this.props;
    return createPortal(
      <div className={styles.Overlay}
        onClick={event => {
          if (event.target !== event.currentTarget) {
            return;
          }
          onCloseModal();
        }}
      >
        <div className={styles.Modal}>
          <img src={imageUrl} alt={alt} />
        </div>
      </div>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};


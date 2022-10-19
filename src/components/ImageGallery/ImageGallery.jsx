import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import styles from './ImageGallery.module.css';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((item, index) => {
        return (
          <ImageGalleryItem
            onClick={onClick}
            key={item.id}
            imageUrl={item.webformatURL}
            alt={item.tags}
            id={item.id}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};

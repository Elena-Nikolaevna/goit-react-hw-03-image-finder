import PropTypes from 'prop-types';
import styles from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ children, onClick }) => {
  return (
    <div className={styles.BtnContainer}>
      <button className={styles.Button} type="button"  onClick={onClick}>
      {children}
      </button>
    </div>
  );
}

LoadMoreBtn.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
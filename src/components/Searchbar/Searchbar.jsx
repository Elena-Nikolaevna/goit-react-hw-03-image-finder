//import React, { Component } from 'react';
import { Formik } from 'formik';
/* import Notiflix from 'notiflix'; */
import styles from './Searchbar.module.css';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.searchQuery);
    resetForm();
  };
  return (
    <header className={styles.Searchbar}>
      <Formik initialValues={{ searchQuery: '', }} onSubmit={handleSubmit}>
        {({ isSubmitting }) => (
          <>
            <button
              type="submit"
              className={styles.SearchFormButton}
              //disabled={isSubmitting}
            >
              <span
                className={styles.SearchFormButtonLabel}
                //aria-label="Search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  viewBox="0 0 20 20"
                >
                  <title>search</title>
                  <path d="M19 17l-5.15-5.15a7 7 0 1 0-2 2L17 19zM3.5 8A4.5 4.5 0 1 1 8 12.5 4.5 4.5 0 0 1 3.5 8z" />
                </svg>
              </span>
            </button>

            <input
              className={styles.SearchFormInput}
              name="searchQuery"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              //value={this.state.name}
              //onChange={this.handleChange}
            />
          </>
        )}
      </Formik>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
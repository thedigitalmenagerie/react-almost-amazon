import React from 'react';
import PropTypes from 'prop-types';
import AuthorForm from '../components/authorForm';

function AddAuthors({ setAuthors }) {
  return (
    <div>
      <AuthorForm
       id="author-form"
       setAuthors={setAuthors}/>
    </div>
  );
}

AddAuthors.propTypes = {
  setAuthors: PropTypes.func
};

export default AddAuthors;

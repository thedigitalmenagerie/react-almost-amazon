import React from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../components/authorCard';

function Authors({ authors, setAuthors }) {
  return (
    <div>
       <div id="card-container">
       {authors.map((authorInfo) => (
        <AuthorCard
          key={authorInfo.firebaseKey}
          firebaseKey={authorInfo.firebaseKey}
          firstName={authorInfo.firstName}
          lastName={authorInfo.lastName}
          email={authorInfo.email}
          setAuthors={setAuthors}
          />
       ))}
       </div>
    </div>
  );
}

Authors.propTypes = {
  authors: PropTypes.array,
  setAuthors: PropTypes.func
};

export default Authors;

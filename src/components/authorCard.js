import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardText,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deleteAuthor } from '../helpers/data/authorData';
import AuthorForm from './authorForm';

const AuthorCard = ({
  firebaseKey,
  firstName,
  lastName,
  email,
  setAuthors
}) => {
  const [editing, setEditing] = useState(false);
  const history = useHistory();

  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deleteAuthor(firebaseKey)
          .then((authorArray) => setAuthors(authorArray));
        break;
      case 'edit':
        setEditing((prevState) => !prevState);
        break;
      case 'view':
        history.pushState(`authors/${firebaseKey}`);
        break;
      default:
        console.warn('Nothing Selected');
    }
  };

  return (
    <Card id="author-card" body>
    <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
    <CardText>{email}</CardText>
    <Button color="warning" onClick={() => handleClick('view')}>View Author</Button>
    <Button color="danger" onClick={() => handleClick('delete')}>Delete Author</Button>
    <Button color="info" onClick={() => handleClick('edit')}>
      {editing ? 'Close Form' : 'Edit Author'}
    </Button>
    {
      editing && <AuthorForm
      firebaseKey={firebaseKey}
      firstName={firstName}
      lastName={lastName}
      email={email}
      setAuthors={setAuthors}
      />
    }
  </Card>
  );
};

AuthorCard.propTypes = {
  firstName: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  setAuthors: PropTypes.func
};

export default AuthorCard;

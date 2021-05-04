import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardTitle,
  CardText
} from 'reactstrap';
import { getSingleAuthor } from '../helpers/data/authorData';

function SingleAuthor() {
  const [author, setAuthor] = useState({});
  const { firebaseKey } = useParams();

  useEffect(() => {
    getSingleAuthor(firebaseKey).then((response) => setAuthor(response));
  }, []);

  return (
    <div>
      <h1>Single Author</h1>
        <Card body className="text-center">
          <CardTitle tag="h5">{author.first_name} {author.last_name}</CardTitle>
          <CardText>{author.email}</CardText>
        </Card>
    </div>
  );
}

export default SingleAuthor;

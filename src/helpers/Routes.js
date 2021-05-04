import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import AddAuthors from '../views/AddAuthor';
import Authors from '../views/Authors';

function Routes({ authors, setAuthors }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/add-authors' component={() => (<AddAuthors setAuthors={setAuthors}/>)} />
        <Route path='/authors' component={() => (<Authors authors={authors} setAuthors={setAuthors} />)} />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Routes;

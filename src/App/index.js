import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import 'firebase/auth';
import firebaseConfig from '../helpers/apiKeys';
import './App.scss';
import { getAuthors } from '../helpers/data/authorData';
import NavBar from '../components/NavBar';
import Routes from '../helpers/Routes';

firebase.initializeApp(firebaseConfig);

function App() {
  const [authors, setAuthors] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getAuthors().then((resp) => setAuthors(resp));
  }, []);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        // do something or another
        const userInfoObj = {
          fullName: authed.displayName,
          profileImage: authed.photoURL,
          uid: authed.uid,
          user: authed.email.split('@')[0]
        };
        setUser(userInfoObj);
      } else if (user || user === null) {
        // do something
        setUser(false);
      }
    });
  }, []);

  return (
    <>
    <Router>
      <NavBar />
      <Routes
      authors={authors}
      setAuthors={setAuthors} />
    </Router>
    </>
  );
}

export default App;

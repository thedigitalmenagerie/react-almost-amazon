import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getAuthors = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addAuthor = (author) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/authors.json`, author)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/authors/${response.data.name}.json`, body)
        .then(() => {
          getAuthors().then((authorsArray) => resolve(authorsArray));
        });
    })
    .catch((error) => reject(error));
});

const deleteAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/authors/${firebaseKey}.json`)
    .then(() => getAuthors().then((authorArray) => resolve(authorArray)))
    .catch((error) => reject(error));
});

const updateAuthor = (author) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/authors/${author.firebaseKey}.json`, author)
    .then(() => getAuthors().then(resolve))
    .catch((error) => reject(error));
});

const getSingleAuthor = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/authors/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  addAuthor,
  getAuthors,
  deleteAuthor,
  updateAuthor,
  getSingleAuthor,
};

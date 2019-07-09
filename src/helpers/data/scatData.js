import axios from 'axios';
import firebaseConfig from '../apiKeys.json';

const fbUrl = firebaseConfig.firebaseKeys.databaseURL;

const getScats = uid => new Promise((resolve, reject) => {
  axios.get(`${fbUrl}/scats.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const scats = [];
      Object.keys(res.data).forEach((fbKey) => {
        res.data[fbKey].id = fbKey;
        scats.push(res.data[fbKey]);
      });
      resolve(scats);
    })
    .catch(err => reject(err));
});

export default { getScats };
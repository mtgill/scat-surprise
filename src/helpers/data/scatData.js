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

const deleteScat = scatId => axios.delete(`${fbUrl}/scats/${scatId}.json`);

const getSingleScat = scatId => axios.get(`${fbUrl}/scats/${scatId}.json`);

const postScat = newScat => axios.post(`${fbUrl}/scats.json`, newScat);

export default {
  getScats,
  deleteScat,
  getSingleScat,
  postScat,
};

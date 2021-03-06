import API_KEY from '../../../token.js';
const axios = require('axios');

function getReviewInfo(id, cb) {
  let headers = {
    method: 'get',
    url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hratx/reviews/meta',
    params: {
      product_id: id
    },
    headers: {
      Authorization: API_KEY
    }
  }
  axios(headers)
  .then(res => {
    //console.log('GET REVIEW: ', res);
    cb(null, res.data.ratings);
  })
  .catch(err => {
    cb(err);
  });
}

function getCurrentProductInfo(id, cb) {
  let headers = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}`,
    headers: {
      Authorization: API_KEY
    },
  }
  axios(headers)
  .then(res => {
    cb(null, res.data);
  })
  .catch(err => {
    cb(err);
  });
}

function getProductInfo(cb) {
  let headers = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products`,
    headers: {
      Authorization: API_KEY
    },
  }
  axios(headers)
  .then(res => {
    cb(null, res);
  })
  .catch(err => {
    cb(err);
  });
}

function getProductStyles(id, cb) {
  let headers = {
    method: 'get',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hratx/products/${id}/styles`,
    headers: {
      Authorization: API_KEY
    },
  }
  axios(headers)
  .then(res => {
    console.log('RES: ', res.data.results);
    cb(null, res.data.results);
  })
  .catch(err => {
    cb(err);
  });
}

export{
  getReviewInfo,
  getCurrentProductInfo,
  getProductInfo,
  getProductStyles

}
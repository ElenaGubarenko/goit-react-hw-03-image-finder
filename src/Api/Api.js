// import { Component } from 'react';
import axios from 'axios';

const api = (request, page = 1) => {
  return axios
    .get(
      `https:pixabay.com/api/?key=20622592-50ccb321bb66e8f51c2ed20b3&q=${request}&image_type=photo&page=${page}&per_page=12`,
    )
    .then(answer => answer.data.hits);
};

export default api;

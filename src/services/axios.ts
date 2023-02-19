import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.ebi.ac.uk/ols/api',
});

export default instance;
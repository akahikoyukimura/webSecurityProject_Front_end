import axios from 'axios';

export default axios.create({
  baseURL: `https://secure-test-web.herokuapp.com/`
});
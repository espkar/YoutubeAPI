import axios from 'axios';

const KEY = 'AIzaSyAVnbmS9Dfe1IrimHVhTy8PPsyYLlzafb8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxresults: 5,
    key: KEY
  }
});

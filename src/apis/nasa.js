import axios from 'axios';

const KEY = 'xBzHUwRAXInygVMPoim9f1UuGVDlOsTPkwhRTrld';

export default axios.create({
  baseURL: 'https://images-api.nasa.gov',
  params: {
      media_type: 'image',
      year_start: '2018'
      //key: KEY
  }
});

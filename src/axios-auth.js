import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://vue-axios-fd06d.firebaseio.com'
})

instance.defaults.headers.common['SOMETHING'] = 'something';

export default instance;
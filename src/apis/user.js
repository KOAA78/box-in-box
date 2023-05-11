import axios from '@/utils/request.js';

const userApi = {
  sms(userPhone) {
    return axios.get('/box/user/sms', { params: { phone: userPhone } });
  },
  signin(userInfo){
    return axios.post('/box/user/signin', userInfo);
  },
  login(userInfo){
    return axios.post('/box/user/login', userInfo);
  },
  logout(){
    return axios.post('/box/user/logout');
  },
  getInfo(){
    return axios.get('/box/user/info');
  }
};

export default userApi;

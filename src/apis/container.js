/*
 * @Descripttion: 
 * @Author: Rui Lin
 * @Date: 2023-05-10 22:27:37
 */
import axios from '@/utils/request.js';

const containerApi = {

  addContainer(containerInfo) {
    return axios.post('/box/container/add', containerInfo);
  },

  getRootContainer(zoneId){
    return axios.get('/box/container/root', { params: { zid: zoneId } })
  }
};

export default containerApi;
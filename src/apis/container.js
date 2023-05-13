/*
 * @Descripttion: 
 * @Author: Rui Lin
 * @Date: 2023-05-10 22:27:37
 */
import axios from '@/utils/request.js';

const containerApi = {

  addContainer(containerInfo) {
    return axios.post('/box/container/add/root', containerInfo);
  },

  getRootContainer(zoneId){
    return axios.get('/box/container/select/root', { params: { zid: zoneId } })
  },

  getChildContainer(parentId){
    return axios.get('/box/container/select/child', { params: { pcid: parentId } })
  },

  getContainerById(containerId){
    return axios.get('/box/container/select', { params: { cid: containerId } })
  }
};

export default containerApi;
/*
 * @Descripttion: 调用关于空间的api
 * @Author: Rui Lin
 * @Date: 2023-05-10 14:39:40
 */

import axios from '@/utils/request.js';

const zoneApi = {
  getdefaultZone() {
    return axios.get('/box/zone/default');
  },
};

export default zoneApi;
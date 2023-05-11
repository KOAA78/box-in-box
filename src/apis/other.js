import axios from '@/utils/request.js';

const otherApi = {

    getImgUrl(imgForm) {
        return axios.post('/sm', imgForm, {
            headers: {
                'Authorization': "FlO1AGb4lMrGfZyZ2YAOdfcaVgo1ltA2",
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        });
    },

};

export default otherApi;
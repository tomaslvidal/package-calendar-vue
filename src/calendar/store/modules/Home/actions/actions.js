import axios from 'axios';

import Vue from 'vue';

import parseFormData from 'json-form-data';

const ajax = {
    reservations: {}
};

export default {
    GET_ITEMS(context, payload){
        return new Promise((resolve, reject) => {
            try {
                (typeof ajax.reservations.token !== "undefined") ? ajax.reservations.cancel() : null;

                ajax.reservations = axios.CancelToken.source();

                axios({
                    url: window.link_get_data,
                    method: 'POST',
                    cancelToken: ajax.reservations.token,
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    data: parseFormData({
                    })
                })
                .then(res => res.data)
                .then(res => {
                    context.commit('SET_ITEM', res);

                    resolve(true);
                })
                .catch(e => {
                    throw new Error('l333f2');
                });
            }
            catch(e){
                reject(e);
            }
        });
    }
};
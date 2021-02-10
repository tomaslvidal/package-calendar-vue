import axios from 'axios';

import Vue from 'vue';

import parseFormData from 'json-form-data';

const ajax = {
    rules: {}
};

export default {
    GET_RULES(context, payload){
        return new Promise((resolve, reject) => {
            try {
                if(typeof context.state.data.rules[payload.numero] !== 'undefined'){
                    resolve(true);
                }
                else{
                    (typeof ajax.rules.token !== "undefined") ? ajax.rules.cancel() : null;

                    ajax.rules = axios.CancelToken.source();

                    axios({
                        url: '//aereos.eviajes.online/services/micha/rules.php',
                        method: 'POST',
                        cancelToken: ajax.rules.token,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        },
                        data: parseFormData({
                            ...(() => {
                                let get_format_json_sell = getFormatJsonSell(payload);

                                return {
                                    fareID: get_format_json_sell.fareID,
                                    recommendationID: get_format_json_sell.recommendationID,
                                    token: get_format_json_sell.token,
                                    opcion: get_format_json_sell.opcion.map(item => ({ id: item.id }))
                                };
                            })()
                        })
                    })
                    .then(res => res.data)
                    .then(res => {
                        context.commit('SET_RULES', {
                            id: payload.numero,
                            data: res
                        });

                        resolve(true);
                    })
                    .catch(e => {
                        throw new Error('l333f2');
                    });
                }
            }
            catch(e){
                reject(e);
            }
        });
    }
};
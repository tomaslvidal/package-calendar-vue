import Vue from 'vue';

export default {
    DETECT_F5(state, payload){
        state.data.detected_f5 = payload;
    }
};
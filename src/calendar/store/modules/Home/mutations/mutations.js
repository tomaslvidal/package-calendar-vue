import Vue from 'vue';

export default {
    SET_RESERVATIONS(state, payload){
        state.data.reservations = payload;
    }
};
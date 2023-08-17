import Vue from 'vue';

export default {
    SET_ITEM(state, payload){
        state.data.items = payload;
    }
};
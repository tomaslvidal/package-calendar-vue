import Vue from 'vue';

import Vuex from 'vuex';

import { Home } from './modules';

import { VuexPersistedstate } from './plugins';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Home
    },
    plugins: [VuexPersistedstate]
});
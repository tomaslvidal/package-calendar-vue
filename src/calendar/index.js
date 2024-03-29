import Vue from 'vue';

import store from './store';

import App from './calendar.vue';

Vue.config.productionTip = false;

Vue.config.devtools = true;

new Vue({
    el: '#calendar',
    store,
    render: h => h(App)
});
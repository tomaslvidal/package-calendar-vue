import Vue from 'vue';

Vue.config.productionTip = false;

Vue.config.devstools = false;

import App from './calendar.vue';

new Vue({
    el:'#calendar',
    render: h => h(App)
});
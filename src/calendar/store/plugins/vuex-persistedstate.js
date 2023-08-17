import Plugin from 'vuex-persistedstate';

const VuexPersistedstate = Plugin({
    key: 'calendar-vue',
    storage: sessionStorage
});

export default VuexPersistedstate;
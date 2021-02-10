import Plugin from 'vuex-persistedstate';

// import AES from 'crypto-js/aes';

// import enc_utf8 from 'crypto-js/enc-utf8';

const VuexPersistedstate = Plugin({
    key: 'air_engine',
    storage: sessionStorage,
    // getState: (key, storage) => storage.length>0 ? JSON.parse(AES.decrypt(storage.getItem(key), 'x002@0').toString(enc_utf8)) : null,
    // setState: (key, state, storage) => storage.setItem(key, AES.encrypt(JSON.stringify(state), 'x002@0'))
});

export default VuexPersistedstate;
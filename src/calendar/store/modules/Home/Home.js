import getters from './getters';

import actions from './actions';

import mutations from './mutations';

const getDefaultState = () => ({
    data: {
        reservations: []
    }
});

const Home = {
    namespaced: true,
    state: getDefaultState(),
    getters,
    mutations,
    actions
}
 
export { getDefaultState };

export default Home;
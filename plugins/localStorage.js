import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    createPersistedState({
        paths: ['memo'],  // localStorageに保存したいstoreを入れる
    })(store);
};
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        bookId: '',
    },
    // 在组件中`computed`属性里使用`...mapGetters()`进行映射
    getters: {
        bookId(state){
            return state.bookId;
        }
    },
    // 必须是同步函数，通过`commit`触发，在组件中`methods`属性里使用`...mapMutations()`进行映射
    mutations: {
        editBookId(state, bookId){
            state.bookId = bookId;
        }
    },
    // 通过`dispatch`触发，在组件中`methods`属性里使用`...mapActions()`进行映射
    actions: {
        editBookId({commit, state}, bookId){
            commit('editBookId', bookId);
        }
    },
});

export default store;
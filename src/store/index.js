//entry point to vuex, combine all modules
import {createStore} from 'vuex';
// import Vue from 'vue';
import todos from './modules/todos'
//Load Vuex
// Vue.use(Vuex);

//create store

export default createStore({
    modules:{
        todos
    }
})
import Vue from 'vue'
import Vuex from 'vuex'

import menu from './module/menu.js'
import users from './module/users.js'
import status from './module/status.js'
Vue.use(Vuex)

// 优化2 模块化抽离
export const store = new Vuex.Store({
    modules:{
        menu,
        users,
        status

    }
})

// 优化1 抽离法
// import * as actions from './actions.js'
// import * as getters from './getters.js'
// import * as mutations from './mutations.js'

// export const store = new Vuex.Store({
//   state,
//   getters,
//   mutations,
//   actions
// })

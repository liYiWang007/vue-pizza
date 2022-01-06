import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    // 设置属性
    menuItems: {},
    currentUser: null,
    isLogin: false
  },
  getters: {
    // 获取属性的状态
    //通过getter获取可以隐藏state里定义的属性名
    getMenuItems: (state) => state.menuItems,
    currentUser: (state) => state.currentUser,
    isLogin: (state) => state.isLogin
  },
  mutations: {
    //commit
    // 改变属性
    setMenuItems(state, data) {
      state.menuItems = data
    },
    // 将匹配到的对象从meunItems数组中删除
    removeMenuItems(state, data) {
      state.menuItems.forEach((item, index) => {
        if (item == data) {
          state.menuItems.splice(index, 1)
        }
      })
    },
    // 将新增的pizza Push到menuItems属性中
    pushToMenuItems(state, data) {
      state.menuItems.push(data)
    },
    // 更改用户登录状态
    userStatus(state, user) {
      if (user) {
        state.currentUser = user
        state.isLogin = true
      } else {
        state.currentUser = null
        state.isLogin = false
      }
    }
  },
  actions: {
    //dispatch
    // 应用mutations
    setUser({ commit }, user) {
      commit('userStatus', user)
    }
  }
})

const state = {
  // 设置属性
  currentUser: null
}

const getters = {
  // 获取属性的状态
  //通过getter获取可以隐藏state里定义的属性名
  currentUser: (state) => state.currentUser
}

const mutations = {
  //commit
  // 改变属性
  userStatus(state, user) {
    if (user) {
      state.currentUser = user
      state.isLogin = true
    } else {
      state.currentUser = null
      state.isLogin = false
    }
  }
}

const actions = {
  //dispatch
  // 应用mutations
  setUser({ commit }, user) {
    commit('userStatus', user)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

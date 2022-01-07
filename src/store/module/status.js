const state = {
  // 设置属性
  isLogin: false
}

const getters = {
  // 获取属性的状态
  //通过getter获取可以隐藏state里定义的属性名
  isLogin: (state) => state.isLogin
}

const mutations = {}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}

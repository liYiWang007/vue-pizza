const state = {
  // 设置属性
  menuItems: {}
}

const getters = {
  // 获取属性的状态
  //通过getter获取可以隐藏state里定义的属性名
  getMenuItems: (state) => state.menuItems
}

const mutations = {
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
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}

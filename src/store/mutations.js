//commit
// 改变属性
export const setMenuItems = (state, data) => {
  state.menuItems = data
}
// 将匹配到的对象从meunItems数组中删除
export const removeMenuItems = (state, data) => {
  state.menuItems.forEach((item, index) => {
    if (item == data) {
      state.menuItems.splice(index, 1)
    }
  })
}
// 将新增的pizza Push到menuItems属性中
export const pushToMenuItems = (state, data) => {
  state.menuItems.push(data)
}
// 更改用户登录状态
export const userStatus = (state, user) => {
  if (user) {
    state.currentUser = user
    state.isLogin = true
  } else {
    state.currentUser = null
    state.isLogin = false
  }
}

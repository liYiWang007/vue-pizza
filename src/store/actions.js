//dispatch
// 应用mutations

// export default { 这里加方法}
export const setUser = ({ commit }, user) => {
  commit('userStatus', user)
}

const module = {
  state: {
    name: '小白',
    age: '-',
    gender: '男'
  },
  actions: {
    edit_personal_info(context) {
      console.log('actions', context)
    }
  },
  mutations: {
    [infos.PERSONAL_INFO](state, editState) {
      console.log('mutations', stats)
      // 修改个人信息
      state = {
        ...state,
        ...editState
      }
    }
  },
  modules: {}
}
export default module

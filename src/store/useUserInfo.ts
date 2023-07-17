import { defineStore } from "pinia";

export default defineStore('userInfo', {
  state: (): State => {
    return {
      userName: 'x',
      welcome: '项目运行成功!'
    }
  },
  getters: {},
  actions: {}
})

type State = {
  userName: string
  welcome: string
}
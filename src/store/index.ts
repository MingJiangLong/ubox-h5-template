import { defineStore } from "pinia";

export const useShareData = defineStore('shareData', {
  state: (): State => {
    return {
      vm: '',
    }
  },
  getters: {
    /**
     * 不会被缓存
     * @param state 
     * @returns 
     */
    STORED_VM(state) {
      return () => {
        if (!!!state.vm) throw new Error("获取机器信息失败");
        return state.vm
      }
    },
    VM(state) {
      return state.vm
    },
  },
  actions: {}
})

type State = {
  vm: string
}
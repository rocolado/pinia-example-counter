import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',

  state: () => ({
    counter: 0
  }),

  actions: {
    increment() {
      this.counter++;
    },

    decrement() {
      this.counter--;
    },
  },

  getters: {
    oddOrEven() {
      if (this.counter % 2 === 0) return "Even";
      else return "Odd";
    }
  }
})

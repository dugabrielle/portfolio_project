import { defineStore } from 'pinia'
import { Dark } from 'quasar'

export const stateTheme = defineStore('theme', {
  state: () => ({
    isDark: Dark.isActive
  }),

  actions: {
    toggleDark() {
      this.isDark = !this.isDark
      Dark.set(this.isDark)
    },

    setDark(value) {
      this.isDark = value
      Dark.set(value)
    },
  },

})


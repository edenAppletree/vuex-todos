<template>
  <div>
    <button @click="changeSkin">换肤</button>
    <div class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </div>
  </div>
</template>

<script>
import TodoFooter from './components/TodoFooter.vue' // shift + alt + 下
import TodoHeader from './components/TodoHeader.vue' // shift + alt + 下
import TodoMain from './components/TodoMain.vue' // shift + alt + 下
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      colors: [
        'red',
        'orange',
        'yellow',
        'green',
        'cyan',
        'blue',
        'purple',
        'white',
        'black'
      ],
      skinColor: ''
    }
  },

  components: {
    TodoFooter,
    TodoHeader,
    TodoMain
  },

  created() {},

  methods: {
    ...mapActions(['skin/asyncChangeColor']),
    changeSkin() {
      this.skinColor =
        this.colors[Math.floor(Math.random() * this.colors.length)]
      console.log(this.skinColor)
      this.$store.dispatch('skin/asyncChangeColor', this.skinColor)
    }
  }
}
</script>

<style scoped></style>

<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.done === true }"
      v-for="item in todolist"
      :key="item.id"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.done" />
        <label>{{ item.name }}</label>
        <button class="destroy" @click="destroyFn(item.id)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      todolist: [],
      isdone: ''
    }
  },
  created() {
    this.todolist = this.$store.state.todos.todolist
    // console.log(this.todolist)
  },
  methods: {
    ...mapActions(['todos/asyncdelList']),
    destroyFn(id) {
      const index = this.todolist.findIndex((item) => item.id === id)
      this.todolist.splice(index, 1)
      console.log(this.todolist)
      this.$store.dispatch('todos/asyncdelList', this.todolist)
    }
  }
}
</script>

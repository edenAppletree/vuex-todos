<template>
  <header class="header">
    <h1 :style="{ color: $store.state.skin.skins }">todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="value"
      @keydown.enter="addtodos"
    />
  </header>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      todolist: [],
      skinColor: '',
      value: '',
      addObj: {
        done: false,
        id: '',
        name: ''
      }
    }
  },
  methods: {
    ...mapActions(['todos/asyncaddList']),
    addtodos() {
      this.todolist = this.$store.state.todos.todolist
      if (this.value.length === 0) {
        this.value = ''
        return alert('任务名不能为空')
      }
      this.addObj.name = this.value
      this.addObj.id = this.todolist[this.todolist.length - 1]
        ? this.todolist[this.todolist.length - 1].id + 1
        : 1
      console.log(this.addObj.id)
      this.$store.dispatch('todos/asyncaddList', { ...this.addObj })
      this.value = ''
    }
  }
}
</script>

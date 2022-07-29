<template>
  <div>
    <button
      class="btn"
      :style="{ color: color, backgroundColor: backgroundColor }"
      :class="[
        { round: round === '' ? true : round },
        {
          primary: type === 'primary',
          info: type === 'info',
          warning: type === 'warning',
          danger: type === 'danger',
          default: type === 'basic'
        }
      ]"
      @click="confirm"
    >
      <slot name="name"></slot>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: {
    type: {
      type: String,
      default: 'basic'
    },
    round: {
      type: Boolean,
      default: false
    },
    color: {
      type: String
    },
    backgroundColor: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    fontSize: {
      type: String
    }
  },
  created() {},

  methods: {
    confirm() {
      alert('确认成功')
    }
  }
}
</script>

<style scoped>
.btn {
  width: 120px;
  height: 50px;
  font-size: 20px;
  border: 1px solid #eee;
}
.primary {
  color: #ffffff;
  background-color: #57be6a;
  border: 1px solid #eee;
}

.info {
  color: #ffffff;
  background-color: #4187f2;
  border: 1px solid #eee;
}
.default {
  color: #333;
  background-color: #fff;
  border: 1px solid #eee;
}
.danger {
  color: #ffffff;
  background-color: #da3131;
  border: 1px solid #eee;
}
.warning {
  color: #ffffff;
  background-color: #f19c73;
  border: 1px solid #eee;
}
.round {
  border-radius: 25px;
}
</style>

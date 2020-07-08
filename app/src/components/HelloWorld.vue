<template>
  <div class="hello">
    <input
      data-test="input"
      v-model="inputValue"
      @keyup.enter="searchContent"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    searchContent () {
      if (this.inputValue) {
        this.$emit('search', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style scoped lang="stylus">
</style>

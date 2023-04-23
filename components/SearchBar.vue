<template>
  <div>
    <input type="text" v-model="term">
    <button @click="search">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      term: ''
    }
  },
  methods: {
    search() {
      this.$store.dispatch('search', this.term)
    }
  }
}
</script>

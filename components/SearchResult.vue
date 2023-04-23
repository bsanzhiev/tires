<template>
  <div>
    <h2>Search Result for '{{ searchTerm }}'</h2>
    <ul>
      <li v-for="product in searchResult" :key="product.id">
        <h3>{{ productName }}</h3>
        <p>{{ product.description }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      searchTerm() {
        return this.$store.getters.searchTerm
      },
      searchResult() {
        return this.$store.getters.searchResult
      }
    },
    mounted() {
      this.$store.dispatch('search', this.$store.getters.searchTerm)
    }
  }
</script>
<template>
  <v-row justify="center" align="center">
    <v-col class="px-0" cols="12" sm="8" md="6">
      <SearchBox />
      <v-divider class="my-6" />
      <ProductCard />
      <SearchBar />
      <SearchResult />
    </v-col>
  </v-row>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue';
import SearchBox from '~/components/SearchBox.vue';
// test components:
import SearchBar from '~/components/SearchBar.vue';
import SearchResult from '~/components/SearchResult.vue';

export default {
  name: "IndexPage",
  components: { ProductCard, SearchBox, SearchBar, SearchResult },
  data() {
    return {
      title: "Hitires",
    };
  },
};
</script>

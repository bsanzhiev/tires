<template>
  <v-row justify="center" align="center">
    <v-col class="px-0" cols="12" sm="8" md="6">
      <ProductCard />
    </v-col>
  </v-row>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue';

export default {
  name: "ProductPage",
  components: { ProductCard, SearchBox },
  data() {
    return {
      title: "Hitires",
    };
  },
};
</script>

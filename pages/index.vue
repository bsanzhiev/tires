<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-carousel style="max-height: 300px">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
            reverse-transition="fade-transition"
            transition="fade-transition"
          ></v-carousel-item>
        </v-carousel>
        <v-card-title class="headline"> Tires Model 1200R20-20 </v-card-title>
        <v-card-text>
          <p><b>Үнэ - 819,000</b></p>
          <p><b>Үлдэгдэл - 17</b></p>
          <p>Улирал - Дөрвөн улирал</p>
          <p>Радиус - R20</p>
          <p>Дугуйн өргөн - 175 mmb</p>
          <p>Дугуйн өндөр - 60 mmb</p>
          <p>Model - Evershine ES660</p>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="#66bb6a" @click="dispatchOrder" nuxt> Order </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        },
      ],
    };
  },
};
</script>

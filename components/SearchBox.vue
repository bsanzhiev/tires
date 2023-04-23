<template>
  <div>
    <v-container>
      <div>
        <v-select v-model="selectedOption" :items="options" item-text="label" item-value="id" label="Options"
          @input="setSelectedOption"></v-select>
      </div>
    </v-container>
    <v-container>
      <b>Доод үнэ</b>
      <div style="display: flex; flex-direction: row">
        <v-select class="mr-1" :items="minPrice" label="Min Price" solo clearable></v-select>
        <v-select class="ml-1" :items="maxPrice" label="Max Price" solo clearable></v-select>
      </div>
    </v-container>
    <v-container>
      <b>Улирал</b>
      <v-select :items="selectSeason" label="Season:" multiple chips solo clearable></v-select>
    </v-container>
    <v-container>
      <b>Радиус</b>
      <v-select :items="selectRadius" label="Radius:" multiple chips solo clearable></v-select>
    </v-container>
    <v-container>
      <b>Дугуйн өргөн</b>
      <v-select :items="selectWide" label="Wide:" multiple chips solo clearable></v-select>
    </v-container>
    <v-container>
      <b>Дугуйн өндөр</b>
      <v-select :items="selectHeight" label="Height:" multiple chips solo clearable></v-select>
    </v-container>
    <v-container>
      <div style="text-align: center">
        <v-btn color="#66bb6a"> Хайх </v-btn>
      </div>
    </v-container>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SearchBox",
  data() {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-menu",
          title: "Filters",
        },
      ],
      miniVariant: false,
      title: "Hitires",
      minPrice: [
        "0",
        "100.000",
        "200.000",
        "300.000",
        "400.000",
        "500,000",
        "750.000",
      ],
      maxPrice: [
        "100.000",
        "200.000",
        "300.000",
        "400.000",
        "500,000",
        "750.000",
        "1.000.000",
      ],
      selectSize: ["1200R20-20", "12R22.5-18"],
      selectModel: [
        "Evershine ES660",
        "Evershine ES918",
        "Evershine ES988",
        "Evershine ES516",
        "Evershine ES518",
        "Evershine ES666x",
        "Evershine ES268X",
        "Evershine ES300",
        "Evershine ES100",
      ],
      selectSeason: ["Дөрвөн улирал", "Өвлийн", "Зуны"],
      selectRadius: ["R13", "R14", "R16", "R18", "R20", "R22"],
      selectWide: ["175", "185", "205", "215", "235"],
      selectHeight: ["40", "45", "50", "65", "90"],
    };
  },
  computed: {
    ...mapGetters('options', ['options', 'selectedOption']),
  },
  methods: {
    ...mapActions('options', ['fetchOptions','setSelectedOption'])
  },
  mounted() {
    this.fetchOptions()
  }
};
</script>

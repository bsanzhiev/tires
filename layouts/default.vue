<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      style="background-color: #66bb6a"
      fixed
      app
    >
      <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer" /> -->
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container class="py-0 mt-6">
        <b>Доод үнэ</b>
        <div class="mt-2" style="display: flex; flex-direction: row">
          <v-select
            class="mr-1"
            :items="minPrice"
            label=" Min Price"
            solo
          ></v-select>
          <v-select
            class="ml-1"
            :items="maxPrice"
            label="Max Price"
            solo
          ></v-select>
        </div>
      </v-container>
      <v-container class="py-0">
        <div>
          <b>Улирал</b>
          <v-select
            :items="selectSeason"
            label="Season:"
            multiple
            chips
            solo
          ></v-select>
        </div>
      </v-container>
      <v-container class="py-0">
        <div>
          <b>Радиус</b>
          <v-select
            :items="selectRadius"
            label="Radius:"
            multiple
            chips
            solo
          ></v-select>
        </div>
      </v-container>
      <v-container class="py-0">
        <div>
          <b>Дугуйн өргөн</b>
          <v-select
            :items="selectWide"
            label="Wide:"
            multiple
            chips
            solo
          ></v-select>
        </div>
      </v-container>
      <v-container class="py-0">
        <div>
          <b>Дугуйн өндөр</b>
          <v-select
            :items="selectHeight"
            label="Height:"
            multiple
            chips
            solo
          ></v-select>
        </div>
      </v-container>
      <v-container class="py-0">
        <div class="pb-1" style="text-align: center">
          <v-btn color="#66bb6a" @click.stop="drawer = !drawer"> Хайх </v-btn>
        </div>
      </v-container>
      <v-container>
        <Nuxt />
      </v-container>
      <v-container>
        <Nuxt />
      </v-container>
      <v-container>
        <div class="pb-4"></div>
        <Nuxt />
      </v-container>
    </v-main>

    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
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
        "",
        "100.000",
        "200.000",
        "300.000",
        "400.000",
        "500,000",
        "750.000",
      ],
      maxPrice: [
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
};
</script>

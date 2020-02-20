<template>
    <v-app :style="'background: #f5f5f5'">
        <!-- class="grey lighten-4 -->
        <Navbar />
        <v-content class="mx-4 mb-4">
            <router-view></router-view>
        </v-content>
    </v-app>
  </template>

<script>
import Navbar from "./components/Navbar";

export default {
  // r: export name?
  // name: "App",
  components: { Navbar },
  data: () => ({
      //
    }),
};
</script>
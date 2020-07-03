<template>
  <v-app>
    <sample />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Sample from "@/views/Sample.vue";

export default Vue.extend({
  name: 'App',

  components: {
    HelloWorld,
    Sample,
  },

  data: () => ({
    //
  }),
});
</script>

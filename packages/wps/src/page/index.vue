<template>
  <view-file v-bind:wpsUrl="jwpsUrl" v-bind:token="jtoken"></view-file>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import viewFile from "../components/view.vue";

@Component({
  components: {
    viewFile,
  },
})
export default class App extends Vue {
  jwpsUrl = "";
  jtoken = "";
  created(): void {
    this.jwpsUrl = sessionStorage.getItem("jwpsUrl") || "";
    this.jtoken = sessionStorage.getItem("jtoken") || "";
  }
}
</script>

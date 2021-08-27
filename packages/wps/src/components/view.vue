<template>
  <div id="viewFile"></div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import * as WPS from "../libs/index.js";
import WebOfficeSDK from "../libs/index";

@Component
export default class WpsView extends Vue {
  simpleMode = false;

  @Prop(String) readonly wpsUrl!: string;
  @Prop(String) readonly token!: string;

  mounted(): void {
    this.openWps(this.wpsUrl, this.token);
  }
  openWps(url: string, token: string): void {
    const wpsInstance = (WPS as WebOfficeSDK).config({
      mode: this.simpleMode ? "simple" : "normal",
      mount: document.querySelector("#app") || undefined,
      wpsUrl: url,
    });
    wpsInstance.setToken({ token });
    let app = wpsInstance.Application;
    console.log(JSON.stringify(app));
  }
}
</script>

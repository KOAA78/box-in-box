<!--
 * @Descripttion: 导航栏
 * @Author: Rui Lin
 * @Date: 2023-04-30 22:03:24
-->
<template>
  <div class="nav-view">
    <v-layout class="bott-nav">
      <v-bottom-navigation color="brown lighten-3" height="72" mode="shift" grow fixed>
        <v-btn to="/zone">
          <span>首页</span>
          <v-icon>mdi-package-variant-closed</v-icon>
        </v-btn>
        <v-btn to="/application">
          <span>应用</span>
          <v-icon>mdi-apple-keyboard-command</v-icon>
        </v-btn>
        <v-btn to="/profile">
          <span>我的</span>
          <v-icon>mdi-account-arrow-up-outline</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: "bott-nav",
  data() {
    return {};
  },
};
</script>

<style  scoped>
.nav-view {
  bottom: 0;
  width: 100vw;
}
</style>

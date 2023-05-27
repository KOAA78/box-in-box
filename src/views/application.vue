<!--
 * @Descripttion: 应用
 * @Author: Rui Lin
 * @Date: 2023-05-19 17:04:52
-->
<template>
  <div class="app-view">
    <div class="app-list">
      <v-card class="mt-10" to="/search">
        <v-row>
          <v-col cols="4">
            <v-icon large class="app-icon">mdi-home-search-outline</v-icon>
          </v-col>
          <v-col>
            <v-card-title class="brown--text font-weight-bold"
              >物品定位</v-card-title
            >
            <v-card-subtitle>多角度搜索物品位置</v-card-subtitle>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="mt-10" to="/calendar">
        <v-row>
          <v-col cols="4">
            <v-icon large class="app-icon">mdi-calendar-clock-outline</v-icon>
          </v-col>
          <v-col>
            <v-card-title class="brown--text font-weight-bold"
              >提醒日历</v-card-title
            >
            <v-card-subtitle>将物品关联日常代办</v-card-subtitle>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="mt-10">
        <v-row>
          <v-col cols="4">
            <v-icon large class="app-icon">mdi-sitemap-outline</v-icon>
          </v-col>
          <v-col>
            <v-card-title class="brown--text font-weight-bold"
              >收纳统计</v-card-title
            >
            <v-card-subtitle>可视化展示物品数据</v-card-subtitle>
          </v-col>
        </v-row>
      </v-card>
    </div>
    <bott-nav></bott-nav>
  </div>
</template>

<script>
import bottNav from "../components/bottom-nav.vue";

export default {
  components: {
    bottNav,
  },
  data() {
    return {};
  },
};
</script>

<style  scoped>
.app-view {
  min-height: 100%;
  width: 100vw;
  background: rgb(241, 240, 240);
}

.app-list {
  position: relative;
  width: 80vw;
  left: 10vw;
  top: 40px;
}

.app-icon {
  position: relative;
  left: 40px;
  top: 25px;
}
</style>

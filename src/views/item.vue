<!--
 * @Descripttion: 物品详情页
 * @Author: Rui Lin
 * @Date: 2023-05-13 15:26:56
-->

<template>
  <div class="item-view">
    <v-toolbar color="brown lighten-2" flat>
      <v-btn icon><v-icon> mdi-arrow-left </v-icon></v-btn>
      <v-toolbar-title class="bar-title flex text-center"
        >物品详情</v-toolbar-title
      >
      <!-- 修改物品资料 -->
      <v-menu left offset-y rounded="lg">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon> mdi-cog-outline </v-icon>
          </v-btn>
        </template>
        <v-card>
          <div><v-btn text color="brown lighten-1">编辑物品</v-btn></div>
          <div><v-btn text color="brown lighten-1">删除物品</v-btn></div>
        </v-card>
      </v-menu>
    </v-toolbar>
    <div class="item-main">
      <div class="item-img mt-2 mb-4">
        <v-carousel hide-delimiters height="225px">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </div>
      <div class="item-info">
        <h3>{{ itemInfo.itemName }}</h3>
        <!-- 路径 -->
        <v-breadcrumbs :items="paths" class="pa-0 pb-2"></v-breadcrumbs>
        <v-expansion-panels multiple v-model="panel">
          <v-expansion-panel class="ma-1">
            <v-expansion-panel-header
              class="brown--text font-weight-black subtitle-1"
              >基本信息</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-list>
                <v-list-item-title class="d-inline">数量</v-list-item-title>
                <v-list-item-subtitle class="d-inline float-right"
                  >1</v-list-item-subtitle
                >
              </v-list>
              <v-list>
                <v-list-item-title class="d-inline">价格</v-list-item-title>
                <v-list-item-subtitle class="d-inline float-right"
                  >79.9</v-list-item-subtitle
                >
              </v-list>
              <v-list>
                <v-list-item-title class="d-inline">种类</v-list-item-title>
                <v-list-item-subtitle class="d-inline float-right"
                  >衣服</v-list-item-subtitle
                >
              </v-list>
              <v-list>
                <v-list-item-title class="d-inline">标签</v-list-item-title>
                <v-list-item-subtitle class="d-inline float-right">
                  <v-list-item-subtitle class="d-inline float-right"
                    >卫衣</v-list-item-subtitle
                  >
                </v-list-item-subtitle>
              </v-list>
              <v-list>
                <v-list-item-title class="d-inline">备注</v-list-item-title>
                <v-list-item-subtitle
                  class="d-inline float-right"
                ></v-list-item-subtitle>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
          <v-expansion-panel>
            <v-expansion-panel-header
              class="brown--text font-weight-black subtitle-1"
              >物品日历</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <v-list v-for="event in calendar" :key="event.calendarId">
                <v-list-item-title class="d-inline">{{
                  event.calendarName
                }}</v-list-item-title>
                <v-list-item-subtitle class="d-inline float-right">{{
                  event.calendarDate
                }}</v-list-item-subtitle>
              </v-list>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
    <!-- NOTE: 增加安全距离，防止底部留白 -->
    <div style="height: 35px"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      length: 3,
      onboarding: 0,
      panel: [0, 1],
      paths: [
        {
          text: "厨房",
        },
        {
          text: "冰箱",
        },
      ],
      itemInfo: {
        itemImg: [],
        itemName: "冰淇淋",
      },
      calendar: [
        {
          calendarId: "1",
          calendarName: "购买日期",
          calendarDate: "2023-05-13",
        },
        {
          calendarId: "2",
          calendarName: "过期日期",
          calendarDate: "2024-05-13",
        },
      ],
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
      ],
    };
  },
  methods: {
    next() {
      this.onboarding =
        this.onboarding + 1 === this.length ? 0 : this.onboarding + 1;
    },
    prev() {
      this.onboarding =
        this.onboarding - 1 < 0 ? this.length - 1 : this.onboarding - 1;
    },
  },
};
</script>

<style  scoped>
.item-view {
  min-height: 100%;
  background: rgb(241, 240, 240);
}

.bar-title {
  color: white;
  letter-spacing: 5px;
  font-size: 20px;
  position: relative;
  right: 8px;
}

.item-main {
  width: 355px;
  position: relative;
  transform: translate(-50%, 0);
  left: 50%;
  top: 10px;
}

.item-info h3 {
  letter-spacing: 1px;
  margin-bottom: 10px;
}

</style>

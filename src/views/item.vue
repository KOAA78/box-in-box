<!--
 * @Descripttion: 物品详情页
 * @Author: Rui Lin
 * @Date: 2023-05-13 15:26:56
-->

<template>
  <div class="item-view">
    <v-toolbar color="brown lighten-2" flat>
      <!-- TODO: 返回上一页页面 -->
      <v-btn icon><v-icon> mdi-arrow-left </v-icon></v-btn>
      <v-toolbar-title class="bar-title">物品详情</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- FIX: 修改为监测数据是否变化？ -->
      <!-- 更新资料 -->
      <v-btn icon>
        <v-icon>mdi-square-edit-outline</v-icon>
      </v-btn>
      <!-- 更新日历 -->
      <v-btn icon @click="dialog = true"
        ><v-icon>mdi-calendar-import-outline</v-icon></v-btn
      >
      <!-- 删除物品 -->
      <v-btn icon><v-icon>mdi-trash-can-outline</v-icon></v-btn>
    </v-toolbar>
    <div class="item-main">
      <!-- 路径 -->
      <v-breadcrumbs :items="paths" class="pa-0 pb-2"></v-breadcrumbs>
      <!-- 图片 -->
      <div class="item-img mt-2 mb-4">
        <v-carousel hide-delimiters height="225px">
          <v-carousel-item
            v-for="(img, i) in itemInfo.itemImg"
            :key="i"
            :src="img"
          ></v-carousel-item>
        </v-carousel>
      </div>
      <div class="item-info">
        <h3>{{itemInfo.itemName}}</h3>
        <!-- 基本信息 -->
        <v-expansion-panels multiple v-model="panel">
          <v-expansion-panel class="ma-1">
            <v-expansion-panel-header
              class="brown--text font-weight-black subtitle-1"
              >基本信息</v-expansion-panel-header
            >
            <v-expansion-panel-content>
              <div class="row-list">
                <div class="one-row">
                  <v-row>
                    <v-col cols="4" class="mt-4"> 数量 </v-col>
                    <v-col cols="8">
                      <v-text-field
                        value="1"
                        dense
                        :disabled="disabled"
                        reverse
                        height="30"
                        color="brown"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
                <div class="one-row">
                  <v-row>
                    <v-col cols="4" class="mt-4"> 价格 </v-col>
                    <v-col cols="8">
                      <v-text-field
                        value="279.99"
                        dense
                        :disabled="disabled"
                        reverse
                        height="30"
                        color="brown"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
                <div class="one-row">
                  <v-row>
                    <v-col cols="4" class="mt-4"> 种类 </v-col>
                    <v-col cols="8">
                      <v-text-field
                        value="衣物"
                        dense
                        :disabled="disabled"
                        reverse
                        height="30"
                        color="brown"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
                <div class="tag-row">
                  <v-row>
                    <v-col cols="4" class="mt-4"> 标签 </v-col>
                    <v-col cols="8" class="mt-1">
                      <v-chip-group column>
                        <v-chip v-for="tag in tags" :key="tag">
                          {{ tag }}
                        </v-chip>
                        <v-chip v-show="!disabled" outlined color="brown"
                          ><v-icon>mdi-plus</v-icon></v-chip
                        >
                      </v-chip-group>
                    </v-col>
                  </v-row>
                </div>
                <div class="one-row">
                  <v-row>
                    <v-col cols="4" class="mt-4"> 备注 </v-col>
                    <v-col cols="8">
                      <v-text-field
                        value=""
                        dense
                        :disabled="disabled"
                        reverse
                        height="30"
                        color="brown"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </div>
              </div>
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
              <!-- 新增日历 -->
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </div>
    </div>
    <v-dialog v-model="dialog">
      <v-card class="pa-4">
        <v-card-subtitle>
          <span class="calendar-title brown--text">新增物品日历</span>
          <v-btn icon class="float-right"><v-icon>mdi-check</v-icon></v-btn>
        </v-card-subtitle>

        <v-text-field
          prepend-icon="mdi-alarm-light-outline"
          placeholder="事件名称"
        ></v-text-field>
        <v-row>
          <v-col>
            <!-- 日历 -->
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="date"
                  placeholder="选择日期"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  color="brown"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title scrollable color="brown">
                <v-spacer></v-spacer>
                <v-btn text color="brown" @click="$refs.menu.save(date)">
                  确定
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>
          <v-col>
            <!-- 提醒开关 -->
            <v-switch
              color="orange darken-3"
              v-model="reminder"
              label="开启提醒"
            ></v-switch>
          </v-col>
        </v-row>
      </v-card>
    </v-dialog>
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
      disabled: true,
      paths: [
        {
          text: "客厅",
        },
        {
          text: "鞋柜",
        },
      ],
      itemInfo: {
        itemImg: [],
        itemName: "鞋子",
        itemImg: [
          "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        ],
      },
      tags: ["xx牌", "运动鞋"],
      dialog: false,
      picker: new Date().toISOString().substr(0, 10),
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
      date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
      menu: false,
      reminder: false,
    };
  },
  methods: {
    editItem() {
      this.disabled = false;
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

.row-list {
  position: relative;
  bottom: 5px;
}

.one-row {
  height: 60px;
}

.calendar-title {
  font-size: 18px;
  position: relative;
  top: 8px;
  letter-spacing: 3px;
}
</style>

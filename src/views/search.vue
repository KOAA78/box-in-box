<!--
 * @Descripttion: 查找物品
 * @Author: Rui Lin
 * @Date: 2023-05-19 16:11:11
-->
<template>
  <div class="search-view">
    <v-toolbar color="brown lighten-3" flat>
      <v-btn icon to="/application"><v-icon> mdi-arrow-left </v-icon></v-btn>
      <v-toolbar-title class="bar-title">物品定位</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn rounded fab small text
        ><v-icon>mdi-microphone-outline</v-icon></v-btn
      > -->
      <v-btn rounded fab small text><v-icon>mdi-magnify</v-icon></v-btn>
    </v-toolbar>
    <!-- 查找选择器 -->
    <div class="search-main ma-4">
      <v-row>
        <v-col cols="6">
          <v-text-field
            label="输入关键词"
            outlined
            clearable
            color="brown"
            rounded
          ></v-text-field>
        </v-col>
        <v-col>
          <v-select color="brown" :items="category" label="种类"></v-select>
        </v-col>
        <v-col>
          <v-select color="brown" :items="tag" label="标签"></v-select>
        </v-col>
      </v-row>
    </div>
    <div class="search-result ma-4">
      <v-card  outlined v-for="item in items" :key="item.itemId" class="mb-3">
        <v-list-item>
          <v-list-item-avatar tile size="84">
            <v-img
              src="https://picsum.photos/510/300?random"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content class="ml-2">
            <v-list-item-title class="brown--text font-weight-bold">{{ item.itemName }}</v-list-item-title>
            <v-list-item-subtitle class="mt-5">{{
              item.itemPostion
            }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      category: ["杂物", "衣物", "食物"],
      tag: ["毛衣", "裤子", "鞋子"],
      items: [
        {
          itemId: "1",
          itemImg: "",
          itemName: "测试一号",
          itemPostion: "厨房-冰箱-第一层",
        },
        {
          itemId: "2",
          itemImg: "",
          itemName: "测试二号",
          itemPostion: "厨房-橱柜",
        },
      ],
    };
  },
};
</script>

<style>
.search-view {
  height: 100vh;
  width: 100vw;
  background: rgb(241, 240, 240);
}
.bar-title {
  color: white;
  letter-spacing: 5px;
  font-size: 20px;
}

.v-list .v-list-item--active {
  background-color: rgb(243, 193, 147) !important;
}
.v-list .v-list-item--active .v-list-item__title {
  color: #ffffff !important;
}

.search-result {
  position: relative;
  bottom: 30px;
}
</style>

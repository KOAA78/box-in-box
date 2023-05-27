<!--
 * @Descripttion: 
 * @Author: Rui Lin
 * @Date: 2023-05-19 15:05:55
-->
<template>
  <div class="category-view">
    <v-toolbar color="brown lighten-3" flat>
      <v-btn icon to="/profile"><v-icon> mdi-arrow-left </v-icon></v-btn>
      <v-toolbar-title class="bar-title">种类设置</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text fab small><v-icon> mdi-square-edit-outline </v-icon></v-btn>
        <v-btn text fab small><v-icon> mdi-tag-plus-outline </v-icon></v-btn>
    </v-toolbar>
    <div class="cate-main">
      <v-expansion-panels multiple>
        <v-expansion-panel v-for="cate in category" :key="cate.categoryId">
          <v-expansion-panel-header
            class="brown--text font-weight-black subtitle-1"
            >{{ cate.categoryName }}</v-expansion-panel-header
          >
          <v-expansion-panel-content>
            <v-chip-group column>
              <v-chip v-for="tag in cate.tags" :key="tag.tagId">
                {{ tag.tagName }}
              </v-chip>
              <v-btn fab plain small><v-icon>mdi-plus</v-icon></v-btn>
            </v-chip-group>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      category: [
        {
          categoryId: "1",
          categoryName: "杂物",
          tags: [
            {
              tagId: "1",
              tagName: "卡片",
            },
            {
              tagId: "2",
              tagName: "书签",
            },
          ],
        },
        {
          categoryId: "2",
          categoryName: "衣物",
          tags: [
            {
              tagId: "1",
              tagName: "毛衣",
            },
          ],
        },
        {
          categoryId: "3",
          categoryName: "食物",
        },
      ],
    };
  },
  methods: {
    addCategroy() {},
  },
};
</script>

<style  scoped>
.category-view {
  height: 100vh;
  width: 100vw;
  background: rgb(241, 240, 240);
}

.bar-title {
  color: white;
  letter-spacing: 5px;
  font-size: 20px;
}

.add-btn {
  top: 80vh;
  right: 25px;
  position: fixed;
}
</style>

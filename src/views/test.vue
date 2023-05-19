<!--
 * @Descripttion: 
 * @Author: Rui Lin
 * @Date: 2023-05-07 00:26:50
-->
<template>
  <div>
    <v-expansion-panels multiple>
      <v-expansion-panel v-for="cate in category" :key="cate.categoryId">
        <v-expansion-panel-header
          class="brown--text font-weight-black subtitle-1"
          >{{ cate.categoryName }}</v-expansion-panel-header
        >
        <v-expansion-panel-content>
          <v-chip-group column>
            <!-- <v-chip outlined> Elevator </v-chip>
            <v-chip outlined> Fireplace </v-chip>
            <v-chip outlined> Wheelchair access </v-chip>
            <v-chip outlined> Dogs ok </v-chip>
            <v-chip outlined> Cats ok </v-chip> -->
            <v-chip v-for="tag in cate.tags" :key="tag.tagId">
              {{ tag.tagName }}
            </v-chip>
          </v-chip-group>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
      
  </div>
</template>

<script>
export default {
  data: () => ({
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
      },
      {
        categoryId: "3",
        categoryName: "食物",
      },
    ],
  }),
};
</script>

<style  scoped>
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

<template>
  <div class="container-view">
    <!-- 顶部标题栏 -->
    <v-toolbar color="brown lighten-3" flat>
      <!-- 返回 -->
      <v-btn icon to="/zone">
        <v-icon> mdi-arrow-left </v-icon>
      </v-btn>
      <v-toolbar-title class="container-title flex text-center">厨房</v-toolbar-title>
      <!-- 添加物品 -->
      <v-btn icon>
        <v-icon> mdi-package-variant-closed-plus </v-icon>
      </v-btn>
      <!-- 修改容器资料 -->
      <v-btn icon>
        <v-icon> mdi-cog-outline </v-icon>
      </v-btn>
    </v-toolbar>

    <!-- 路径 -->
    <v-breadcrumbs :items="items">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :disabled="item.disabled">
          <span :style="`color: ${item.color}`">
            {{ item.text }}
          </span>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>

    <div class="container-box">
      <!-- 容器封面 -->
      <img
        src="https://s2.loli.net/2023/05/10/ClnFa6mftGWUqk3.png"
        class="container-img"
      />
      <!-- 切换栏 -->
      <v-bottom-navigation
        class="change-nav"
        height="45px"
        color="brown darken-4"
      >
        <v-btn class="rounded-pill"> <span>本层物品</span> </v-btn>
        <v-btn class="rounded-pill"> <span>子容器</span> </v-btn>
      </v-bottom-navigation>

      <!-- 具体子项 -->
      <v-card outlined class="list-box"> </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "厨房",
          href: "breadcrumbs_dashboard",
        },
        {
          text: "冰箱",
          href: "breadcrumbs_link_1",
        },
        {
          text: "第一层",
          href: "breadcrumbs_link_2",
          color: "Sienna",
        },
      ],
    };
  },
};
</script>

<style scoped>
.container-view {
  min-height: 100%;
  width: 100vw;
  background: rgb(241, 240, 240);
}
.container-title {
  color: white;
  letter-spacing: 8px;
  font-size: 20px;
  position: relative;
  left: 15px;
}

.container-img {
  object-fit: cover;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  border: 2px solid rgb(160, 136, 124);
  border-radius: 10px;
  position: relative;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 150px;
}

.change-nav {
  border-radius: 20px;
  width: 325px;
  position: relative;
  top: 15px;
  left: 33px;
  box-shadow: none;
}

.change-nav span {
  font-size: 17px;
}

.list-box {
  background-color: #ffffff;
  width: 325px;
  min-height: 345px;
  position: relative;
  transform: translate(-50%, 0%);
  left: 50%;
  top: 35px;
  border-radius: 15px;
}
</style>

<template>
  <div class="container-view">
    <!-- 顶部标题栏 -->
    <v-toolbar color="brown lighten-3" flat>
      <!-- 返回 -->
      <v-btn icon to="/zone">
        <v-icon> mdi-arrow-left </v-icon>
      </v-btn>
      <v-toolbar-title class="container-title">{{
        containerInfo.containerName
      }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- 添加本层物品 -->
      <v-menu left offset-y rounded="lg">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon> mdi-view-grid-plus-outline </v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-text class="text-center">添加物品</v-card-text>

          <div>
            <v-btn text color="brown lighten-1" to="/item">手动添加</v-btn>
          </div>
          <div><v-btn text color="brown lighten-1">扫码识别</v-btn></div>
          <div><v-btn text color="brown lighten-1">在线链接</v-btn></div>
        </v-card>
      </v-menu>
      <!-- 添加子容器 -->
      <v-btn icon>
        <v-icon> mdi-package-variant-closed-plus </v-icon>
      </v-btn>
      <!-- 修改容器资料 -->
      <v-menu left offset-y rounded="lg">
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon> mdi-cog-outline </v-icon>
          </v-btn>
        </template>
        <v-card>
          <div><v-btn text color="brown lighten-1">编辑容器</v-btn></div>
          <div><v-btn text color="brown lighten-1">删除容器</v-btn></div>
        </v-card>
      </v-menu>
    </v-toolbar>

    <!-- 路径 -->
    <v-breadcrumbs :items="paths"></v-breadcrumbs>

    <div class="container-box">
      <!-- 容器封面 -->
      <img :src="containerInfo.containerImg" class="container-img" />
      <!-- 切换栏 -->
      <v-tabs color="brown" centered class="change-nav">
        <v-tab @click="layer = true">本层物品</v-tab>
        <v-tab @click="layer = false">子容器</v-tab>
      </v-tabs>

      <!-- 具体子项 -->
      <v-card outlined class="list-box">
        <!-- 本层物品 -->
        <v-list rounded v-if="layer">
          <v-row class="pa-3">
            <v-col v-for="card in items" :key="card.title" :cols="6">
              <v-card @click="enterItem(card.itemId)">
                <v-img
                  :src="card.itemImg"
                  class="white--text align-end"
                  height="125px"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
                >
                  <v-card-title>{{ card.itemName }}</v-card-title>
                </v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-list>
        <!-- 子容器 -->
        <v-list rounded v-else>
          <v-list-item
            v-for="child in childContainers"
            :key="child.containerId"
            link
            @click="enterChild(child.containerId)"
          >
            <v-list-item-icon>
              <v-icon :color="child.dotColor">mdi-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>
              {{ child.containerName }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: this.$route.params.cid,
      layer: "true",
      paths: [
        {
          text: "厨房",
          // href: "breadcrumbs_dashboard",
        },
        {
          text: "冰箱",
          // href: "breadcrumbs_link_1",
        },
      ],
      containerInfo: {
        containerName: "",
        containerImg: "",
      },
      childContainers: [
        {
          containerId: "",
          containerName: "",
          dotColor: "",
        },
      ],
      items: [
        {
          itemId: "1",
          itemName: "冰淇淋",
          itemImg: "https://s2.loli.net/2023/05/11/Mn1pkWLoIVlda8j.png",
        },
        {
          itemId: "2",
          itemName: "土豆",
          itemImg: "https://s2.loli.net/2023/05/11/8TRMiqFdtVkaK2b.jpg",
        },
      ],
    };
  },

  created() {
    this.getContainerInfo();
    this.getChildContaier();
  },

  methods: {
    getContainerInfo() {
      this.$api.containerApi.getContainerById(this.cid).then((resp) => {
        this.containerInfo = resp.data;
      });
    },
    getChildContaier() {
      this.$api.containerApi.getChildContainer(this.cid).then((resp) => {
        this.childContainers = resp.data;
      });
    },
    getItem() {},
    enterItem(itemId) {
      this.$router.push(`/item/${itemId}`);
    },
    enterChild(containerId) {
      this.$router.push({
        name: "container",
        params: {
          cid: containerId,
        },
      });
    },
  },

  /* NOTE:
   * Vue路由采用的是单页应用的方式，
   * 只有第一次进入时才会触发created()方法，
   * 之后的路由跳转不会重新渲染组件
   */
  watch: {
    $route(to, from) {
      this.cid = to.params.cid;
      layer: "true";
      this.getContainerInfo();
      this.getChildContaier();
    },
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
  /* left: 25px; */
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

/* FIX: 列表太长底部留白 */
.list-box {
  background-color: #ffffff;
  width: 325px;
  min-height: 345px;
  position: relative;
  transform: translate(-50%, 0%);
  left: 50%;
  top: 35px;
}
</style>

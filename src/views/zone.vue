<template>
  <div class="zone-view">
    <div class="mx-auto zone-card">
      <img src="../assets/img/box_zone.png" />
      <div class="my-zone">
        <p>{{ zoneInfo.zoneName }}</p>
        <v-btn rounded color="brown lighten-3" dark small class="zone-btn">
          切换空间
        </v-btn>
      </div>
    </div>
    <!-- 根容器列表 -->
    <div class="mx-auto zone-container">
      <v-row>
        <v-col v-for="card in containers" :key="card.containerId" :cols="6">
          <v-card>
            <v-img
              :src="card.containerImg"
              class="white--text align-end"
              height="150px"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.3)"
              @click="enterContanier(card.containerId)"
            >
              <v-card-title>{{ card.containerName }}</v-card-title>
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="add-container">
      <v-btn
        elevation="5"
        fab
        absolute
        color="brown lighten-4"
        right
        class="add-btn"
        @click="sheet = !sheet"
      >
        <v-icon color="white">mdi-package-variant-closed-plus</v-icon></v-btn
      >
      <v-bottom-sheet v-model="sheet">
        <v-sheet
          class="add-sheet text-center py-4 rounded-t-xl"
          height="400px"
          color="rgb(241, 240, 240)"
        >
          <h3>添加新容器</h3>
          <v-btn plain class="confirm-btn" @click="addContainer"> 确定 </v-btn>
          <!-- FIX: 添加非空判断 -->
          <v-text-field
            label="容器名称"
            color="brown"
            class="mx-auto add-title"
            v-model="newContainer.containerName"
          ></v-text-field>
          <!-- 上传封面 -->
          <img-upload @change="getImgUrl" class="img-upload"></img-upload>
        </v-sheet>
      </v-bottom-sheet>
    </div>

    <bott-nav></bott-nav>
  </div>
</template>

<script>
import router from "@/router/router";
import bottNav from "../components/bottom-nav.vue";
import imgUpload from "../components/img-upload.vue";

var formData = new FormData();

export default {
  components: {
    bottNav,
    imgUpload,
  },
  data() {
    return {
      sheet: false,
      zoneInfo: {
        zoneId: "",
        zoneName: "",
      },
      containers: [
        {
          containerId: "",
          containersName: "",
          containerImg: "",
        },
      ],
      formDate: "",
      newContainer: {
        containerName: "",
        containerImg: "",
      },
    };
  },

  created() {
    this.$api.zoneApi.getdefaultZone().then((resp) => {
      this.zoneInfo.zoneId = resp.data.zoneId;
      // console.log("空间" + this.zoneInfo.zoneId);
      this.zoneInfo.zoneName = resp.data.zoneName;
      this.getRootContainer();
      this.newContainer.zoneId = this.zoneInfo.zoneId;
    });
  },

  methods: {
    getRootContainer() {
      this.$api.containerApi
        .getRootContainer(this.zoneInfo.zoneId)
        .then((resp) => {
          this.containers = resp.data;
        });
    },
    getImgUrl(imgSrc) {
      formData.append("smfile", imgSrc);
      // console.log(formData.get("smfile"))
    },

    addContainer() {
      this.$api.otherApi.getImgUrl(formData).then((resp) => {
        // TODO: 图床反应太慢，增加loading功能
        this.newContainer.containerImg = resp.data.url;
        this.$api.containerApi.addContainer(this.newContainer).then((resp) => {
          this.getRootContainer();
          this.sheet = false;
        });
      });
    },

    //FiX: 假设用户输入某个不属于它的容器Id，是否也能进入？
    enterContanier(containerId) {
      router.push({
        name: "container",
        params: {
          cid: containerId,
        },
      });
    },
  },
};
</script>

<style  scoped>
.zone-view {
  min-height: 100%;
  width: 100vw;
  background: rgb(241, 240, 240);
}

.zone-card {
  height: 11vh;
  width: 85vw;
  background: rgb(245, 240, 235);
  position: relative;
  top: 40px;
  box-shadow: 2px 2px 10px 1px rgb(220, 220, 204);
  border-radius: 10px;
}

.zone-card img {
  display: inline;
  position: relative;
  width: 40vw;
  bottom: 6vh;
  left: 45vw;
}

.my-zone {
  position: relative;
  bottom: 18vh;
  margin-left: 25px;
}

.my-zone p {
  font-size: 20px;
  color: rgb(134, 115, 95);
  font-weight: 700;
  letter-spacing: 2px;
}

.zone-btn {
  position: relative;
  bottom: 5px;
}

.zone-container {
  width: 85vw;
  position: relative;
  top: 8vh;
  /* NOTE: 解决底部导航栏遮挡 */
  padding-bottom: 100px;
}

.add-btn {
  top: 80vh;
  position: fixed;
}

.add-sheet h3 {
  letter-spacing: 6px;
  color: #7f6d63;
}

.confirm-btn {
  float: right;
  margin-right: 10px;
  bottom: 30px;
}

.add-title {
  width: 70vw;
  display: block;
  position: relative;
  bottom: 15px;
}

.img-upload {
  position: relative;
  top: 32%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>

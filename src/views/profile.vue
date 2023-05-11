<template>
  <div class="profile-view">
    <div class="user-info">
      <div class="info-content">
        <v-avatar size="72px" class="user-avatar">
          <v-img
            alt="Avatar"
            :src="userInfo.userAvatar"
            lazy-src="../assets/img/box_zone.png"
          ></v-img
        ></v-avatar>
        <span class="user-name">{{ userInfo.userName }}</span>
      </div>
    </div>
    <div class="user-operation">
      <div class="user-setting">
        <v-icon>mdi-cog-outline</v-icon>
        <span>我的设置</span>
      </div>
      <div class="user-setting">
        <v-icon>mdi-sofa-outline</v-icon>
        <span>收纳管理</span>
      </div>
    </div>
    <img src="../assets/img/box_pro.png" class="deco-box" />

    <!-- FIXME：直接移到我的设置 -->
    <!-- <div class="logout-btn">
      <v-btn block @click="logout">
        <v-icon left> mdi-power </v-icon>退出登录
      </v-btn>
    </div> -->

    <bott-nav></bott-nav>
  </div>
</template>

<script>
// import router from "@/router/router";
import bottNav from "../components/bottom-nav.vue";
export default {
  components: {
    bottNav,
  },
  created() {
    this.$api.userApi.getInfo().then((resp) => {
      this.userInfo.userName = resp.data.name;
      this.userInfo.userAvatar = resp.data.avatar;
      if (resp.data.avatar == "") {
        this.userInfo.userAvatar = this.defaultAvatar;
      } else {
      }
    });
  },
  data() {
    return {
      userInfo: {
        userName: "",
        userAvatar: "",
      },
    };
  },
  methods: {
    async logout() {
      let res = await this.$dialog.confirm({
        text: "确认退出登录",
        persistent: false,
        actions: [
          {
            text: "确认",
            color: "brown",
            key: true,
          },
        ],
      });
      if (res) {
        this.$api.userApi.logout();
        localStorage.clear("authToken");
        router.push("/login");
      }
    },
  },
};
</script>

<style  scoped>
.profile-view {
  height: 100vh;
  width: 100vw;
  background: rgb(241, 240, 240);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-info {
  height: 12vh;
  width: 80vw;
  background: rgb(245, 240, 235);
  position: relative;
  top: 70px;
  box-shadow: 2px 2px 10px 1px rgb(210, 210, 208);
  border-radius: 10px;
}

.info-content {
  display: flex;
  position: relative;
  top: 50%;
}

.user-avatar {
  position: relative;
  top: 50%;
  left: 20%;
  transform: translate(-50%, -50%);
}

.user-name {
  position: relative;
  left: 25%;
  top: -15px;
  font-size: 20px;
  color: rgba(73, 62, 53, 0.748);
  text-align: right;
}

.user-operation {
  height: 14vh;
  width: 80vw;
  background: rgb(245, 240, 235);
  box-shadow: 2px 2px 10px 1px rgb(210, 210, 208);
  border-radius: 10px;
  position: relative;
  top: 120px;
}

.user-setting {
  width: 100%;
  margin: 20px;
}

.user-setting span {
  margin: 25px;
  padding: 10px;
  color: rgb(79, 62, 55);
  letter-spacing: 2px;
  font-size: 18px;
}

.deco-box {
  position: relative;
  top: 325px;
  left: 65px;
}

.logout-btn {
  width: 80vw;
  color: rgba(73, 62, 53, 0.748);
  position: relative;
  top: 400px;
}
</style>

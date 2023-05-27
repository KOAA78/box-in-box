<template>
  <!-- 标题 -->
  <div class="info-view">
    <v-toolbar color="brown lighten-4" flat>
      <v-btn icon><v-icon> mdi-arrow-left </v-icon></v-btn>
      <v-toolbar-title class="bar-title">一号空间</v-toolbar-title>
    </v-toolbar>
    <!-- 标题 -->

    <!-- 管理员 -->
    <v-container>
      <v-row dense>
        <!-- <v-col cols="1"></v-col> -->
        <v-col cols="10">
          <v-list color="rgb(241, 240, 240)" dense>
            <v-subheader
              class="subtitle-effect brown--text text--lighten-1 text-subtitle-1 font-weight-bold"
              ><span class="subtitle-effect">管理员</span>
              <div class="subtitle-overflow-effect">&emsp;&emsp;&emsp;</div>
            </v-subheader>
            <v-list-item
              v-for="admin in adminList"
              :key="admin.adminId"
              class="mt-2 mb-4"
            >
              <v-avatar size="48px" class="mr-4">
                <v-img
                  alt="Avatar"
                  lazy-src="../assets/img/box_zone.png"
                ></v-img
              ></v-avatar>
              <span
                class="brown--text text--lighten-1 font-weight-medium title"
                >{{ admin.adminName }}</span
              >
            </v-list-item>
          </v-list>
          <!-- 管理员 -->

          <v-list color="rgb(241, 240, 240)" dense>
            <v-subheader
              class="subtitle-effect brown--text text--lighten-1 text-subtitle-1 font-weight-bold"
              ><span class="subtitle-effect">其他成员</span>
              <div class="subtitle-overflow-effect">
                &emsp;&emsp;&emsp;&emsp;
              </div>
            </v-subheader>
            <v-list-item
              v-for="member in memberList"
              :key="member.memberId"
              class="mt-2 mb-4"
            >
              <v-avatar size="48px" class="mr-4">
                <v-img
                  alt="Avatar"
                  lazy-src="../assets/img/box_zone.png"
                ></v-img
              ></v-avatar>
              <span
                class="brown--text text--lighten-1 font-weight-medium title"
                >{{ member.memberName }}</span
              >
              <v-btn
                color="brown lighten-2 white--text "
                small
                rounded
                elevation="3"
                class="remove-btn"
                >移除</v-btn
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="ml-3 mr-6"
                ><v-icon color="yellow darken-2"
                  >mdi-plus-circle-outline</v-icon
                ></v-list-item-icon
              >
              <span
                class="yellow--text text--darken-2 font-weight-medium title"
              >
                邀请新成员</span
              >
            </v-list-item>
          </v-list>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adminList: [
        {
          adminId: "1",
          adminImg: "",
          adminName: "创造者",
        },
      ],
      memberList: [
        {
          memberId: "1",
          memberImg: "",
          memberName: "成员一",
        },
        {
          memberId: "2",
          memberImg: "",
          memberName: "成员二",
        },
      ],
    };
  },
};
</script>

<style scoped>
.info-view {
  background-color: rgb(241, 240, 240);
  min-height: 100%;
}

.bar-title {
  letter-spacing: 5px;
  font-size: 20px;
}

.page-header {
  padding-left: calc((100% - 37px * 4) / 2);
  color: #6d4c41;
  font-weight: bolder;
  font-size: 16px;
  flex-grow: 1;
}
.subtitle-effect {
  position: relative;
  z-index: 10;
}
.subtitle-overflow-effect {
  height: 30%;
  position: absolute;
  background-color: #c89f52;
  top: 55%;
  border-radius: 30px;
  z-index: 0;
}

.remove-btn {
  position: relative;
  left: 150px;
}
</style>
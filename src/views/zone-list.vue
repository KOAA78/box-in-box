<template>
  <!-- 标题 -->
  <v-main class="page-view">
    <v-toolbar color="brown lighten-3" flat>
      <v-btn icon to="/profile"><v-icon> mdi-arrow-left </v-icon></v-btn>
      <v-toolbar-title class="bar-title">空间管理</v-toolbar-title>
    </v-toolbar>
    <!-- 标题 -->

    <!-- 正文 -->
    <v-container class="mt-6">
      <!-- 我创建的空间区-->
      <v-row dense class="page-subheader">
        <v-col cols="1"></v-col>
        <v-col cols="11">我创建的空间</v-col>
      </v-row>
      <v-row dense>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-card color="white" max-height="60vh">
            <!-- 1号空间 -->
            <v-card-actions
              class="pa-0"
              v-for="zone in myZone"
              :key="zone.zoneId"
            >
              <v-btn
                block
                depressed
                min-height="10vh"
                class="justify-space-between"
                @click="getZoneInfo(zone.zoneId)"
              >
                <div class="d-flex">
                  <v-icon large color="brown darken-2" class="ml-4 mr-3"
                    >mdi-package-variant-closed</v-icon
                  >
                  <v-card-title
                    class="text-body-1 brown--text text--darken-2"
                    >{{ zone.zoneName }}</v-card-title
                  >
                </div>
                <v-icon color="brown darken-2">mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
            <!-- 1号空间 -->

            <!-- 创建新空间 -->
            <v-card-actions class="pa-0"
              ><v-btn block depressed min-height="10vh" class="justify-start">
                <div class="d-flex mx-2">
                  <v-icon color="yellow darken-2" class="ml-4 mr-3"
                    >mdi-plus-circle-outline</v-icon
                  >
                  <v-card-title
                    class="amber--text text--darken-2 font-weight-medium subtitle-1"
                    >创建新空间</v-card-title
                  >
                </div>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
      <!-- 创建新空间 -->

      <!-- 我创建的空间区-->

      <br />
      <br />

      <!-- 我所在的其它的空间区-->
      <v-row dense class="page-subheader">
        <v-col cols="1"></v-col>
        <v-col cols="11">我所在的其他空间</v-col>
      </v-row>
      <v-row dense>
        <v-col cols="1"></v-col>
        <v-col cols="10">
          <v-card color="white" max-height="60vh">
            <v-card-actions
              class="pa-0"
              v-for="zone in otherZone"
              :key="zone.zoneId"
              ><v-btn
                block
                depressed
                min-height="10vh"
                class="justify-space-between"
              >
                <div class="d-flex">
                  <v-icon large color="brown darken-2" class="ml-4 mr-3"
                    >mdi-package-variant-closed</v-icon
                  >
                  <div>
                    <v-card-title
                      class="text-body-1 brown--text text--darken-2"
                      >{{ zone.zoneName }}</v-card-title
                    >
                  </div>
                </div>
                <v-icon color="brown darken-2">mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-actions class="pa-0"
              ><v-btn block depressed min-height="10vh" class="justify-start">
                <div class="d-flex mx-2">
                  <v-icon color="yellow darken-2" class="ml-4 mr-2"
                    >mdi-plus-circle-outline</v-icon
                  >
                  <v-card-title
                    class="amber--text text--darken-2 font-weight-medium subtitle-1"
                    >加入新空间</v-card-title
                  >
                </div>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col cols="1"></v-col>
      </v-row>
      <!-- 我所在的其它的空间区-->
    </v-container>
    <!-- 正文 -->
  </v-main>
</template>
<script>
export default {
  name: "zone-manager",
  data() {
    return {
      myZone: [
        {
          zoneId: "1",
          zoneName: "一号空间",
        },
        {
          zoneId: "2",
          zoneName: "二号空间",
        },
      ],
      otherZone: [
        {
          zoneId: "1",
          zoneName: "测试空间",
        },
      ],
    };
  },
  methods:{
    getZoneInfo(zid){
      this.$router.push(`/manage/info/${zid}`);
      // location.reload();
    }
  }
};
</script>

<style scoped>
.page-view {
  background-color: rgb(241, 240, 240);
  min-height: 100%;
}
.bar-title {
  color: white;
  letter-spacing: 5px;
  font-size: 20px;
}
</style>
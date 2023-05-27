<template>
  <div>
    <v-dialog v-model="result" persistent max-width="290">
      <v-card>
        <v-card-title class="title"> 识别结果 </v-card-title>
        <v-card-text>{{ scanText }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="brown darken-1" text @click="dialog = false">
            重新识别
          </v-btn>
          <v-btn color="brown darken-4" text @click="dialog = false">
            新增物品
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: true,
    };
  },
};
</script>

<style  scoped>
</style>

<!--
 * @Descripttion: 封装上传（单张）图片预览组件
 * @Author: Rui Lin
 * @Date: 2023-05-10 23:36:13
-->
<template>
  <div class="upload-container">
    <div class="inner-container">
      <input
        type="file"
        ref="fileInput"
        style="display: none"
        @change="handleFileChange"
      />
      <div class="logo-container" @click="openFilePicker">
        <img v-if="imageUrl" :src="imageUrl" class="preview-image" />
        <!-- 可以替换为其他框架的logo -->
        <v-icon v-else color="brown lighten-3" large
          >mdi-image-plus-outline</v-icon
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "img-upload",
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
    handleFileChange(e) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e) => {
        this.imageUrl = e.target.result;
        // 
        this.$emit("change", file);
      };
    },
    openFilePicker() {
      this.$refs.fileInput.click();
    },
  },
};
</script>

<style>
.upload-container {
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 2px dashed rgb(193, 175, 165);
}
.inner-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}
.logo-container {
  position: relative;
  width: 200px;
  height: 200px;
  cursor: pointer;
  z-index: 1;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview-image {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
}
</style>

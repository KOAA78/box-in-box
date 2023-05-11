<!--
 * @Descripttion: 封装 elementUi 上传图片组件
 * @Author: Rui Lin
 * @Date: 2023-05-10 23:36:13
-->
<template>
  <div class="uploader-view">
    <el-upload
      action="fake"
      :show-file-list="false"
      :before-upload="beforeUpload"
      :http-request="uploadImg"
      v-loading="loading"
    >
      <img v-if="imgSrc" :src="imgSrc" />
      <i v-else class="el-icon-picture-outline uploader-icon"></i>
    </el-upload>
  </div>
</template>

<script>
export default {
  name: "img-upload",
  data() {
    return {
      imgSrc: "",
      loading: false,
    };
  },
  methods: {
    beforeUpload(file) {
      const isJPG =
        file.type === "image/png" ||
        file.type === "image/jpg" ||
        file.type === "image/jpeg";
      if (!isJPG) {
        this.$notify.warning("只能上传图片");
      }
      return isJPG;
    },
    uploadImg(object) {
      let formData = new FormData();
      formData.append("smfile", object.file);
      this.loading = true;
      this.$api.otherApi.getImgUrl(formData).then((resp) => {
        this.imgSrc = resp.data.url;
        this.loading = false;
        this.$emit("change", this.imgSrc);
      });
    },
  },
};
</script>

<style  scoped>
.uploader-view {
  position: relative;
  transform: translate(-50%, -50%);
  left: 50%;
  width: 200px;
  height: 200px;
}

.uploader-view img {
  object-fit: cover;
  width: 200px;
  height: 200px;
  border-radius: 10px;
  border: 2px dashed rgb(193, 175, 165);
  border-radius: 10px;
}

.uploader-icon {
  font-size: 40px;
  color: #b0a397;
  line-height: 187px;
  text-align: center;
  border: 2px dashed rgb(193, 175, 165);
  border-radius: 10px;
  width: 200px;
  height: 200px;
}
</style>

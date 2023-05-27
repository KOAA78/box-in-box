<!--
 * @Descripttion: 条形码识别商品
 * @Author: Rui Lin
 * @Date: 2023-05-21 00:16:09
-->
<template>
  <div class="scan-page">
    <div class="bar-tit"></div>
    <v-toolbar color="brown lighten-2" flat>
      <!-- TODO: 返回上一页页面 -->
      <v-btn icon><v-icon> mdi-arrow-left </v-icon></v-btn>
      <v-toolbar-title class="bar-title">扫码识别</v-toolbar-title>
    </v-toolbar>
    <!-- 扫码区域 -->
    <video ref="video" id="video" class="scan-video" autoplay></video>
    <!-- 提示语 -->
    <div v-show="tipShow" class="scan-tip">{{ tipMsg }}</div>

    <div class="result-tip">
      <v-dialog v-model="result" persistent max-width="290">
        <v-card>
          <v-card-title class="title"> 识别结果 </v-card-title>
          <v-card-text>{{ scanText }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="brown darken-1" text @click="result = false">
              重新识别
            </v-btn>
            <v-btn color="brown darken-4" text>
              新增物品
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>
 
<script>
import { BrowserMultiFormatReader } from "@zxing/library";

export default {
  data() {
    return {
      codeReader: null,
      tipShow: false, // 是否展示提示
      tipMsg: "", // 提示文本内容
      scanText: "", // 扫码结果文本内容
      result: false,
    };
  },
  created() {
    this.openScan();
  },
  watch: {
    $route(to, from) {
      if (to.path == "/scan") {
        // 当处于该页面时
        this.openScan();
      }
    },
  },
  destroyed() {
    this.codeReader.reset();
    this.codeReader = null;
  },
  methods: {
    async openScan() {
      // 初始化摄像头
      this.codeReader = await new BrowserMultiFormatReader();
      this.codeReader
        .getVideoInputDevices()
        .then((videoDevices) => {
          this.tipMsg = "正在调用摄像头";
          this.tipShow = true;
          console.log("get-videoDevices", videoDevices);

          // 默认获取摄像头列表里的最后一个设备id，通过几部测试机发现一般前置摄像头位于列表里的前面几位，所以一般获取最后一个的是后置摄像头
          let firstDeviceId = videoDevices[videoDevices.length - 1].deviceId;
          // 一般获取了手机的摄像头列表里不止一个，有的手机摄像头高级多层，会有变焦摄像头等情况，需要做处理
          if (videoDevices.length > 1) {
            // 一般通过判断摄像头列表项里的 label 字段，'camera2 0, facing back' 字符串含有 'back' 和 '0'，大部分机型是这样，如果有些机型没有，那就还是默认获取最后一个
            firstDeviceId = videoDevices.find((el) => {
              return (
                el.label.indexOf("back") > -1 && el.label.indexOf("0") > -1
              );
            })
              ? videoDevices.find((el) => {
                  return (
                    el.label.indexOf("back") > -1 && el.label.indexOf("0") > -1
                  );
                }).deviceId
              : videoDevices[videoDevices.length - 1].deviceId;
          }
          console.log("get-firstDeviceId", firstDeviceId);

          this.decodeFromInputVideoFunc(firstDeviceId);
        })
        .catch((err) => {
          this.tipShow = false;
          console.error(err);
        });
    },
    decodeFromInputVideoFunc(firstDeviceId) {
      // 使用摄像头扫描
      this.codeReader.reset(); // 重置
      this.codeReader.decodeFromInputVideoDeviceContinuously(
        firstDeviceId,
        "video",
        (result, err) => {
          this.tipMsg = "正在尝试识别";
          if (result) {
            console.log("扫码结果", result);
            this.scanText = result.text;
            if (this.scanText) {
              this.tipShow = false;
              this.result = true;
              // TODO: 获取到扫码结果进行弹窗提示
            }
          }
        }
      );
    },
    clickIndexLeft() {
      // 返回上一页
      this.$destroy();
      this.$router.go(-1);
      // window.location.href = document.referrer;
    },
  },
};
</script>
 
<style lang="scss">
.scan-page {
  min-height: 100vh;
  background-color: #363636;
  overflow-y: hidden;
  .scan-video {
    height: 85vh;
  }

  .bar-title {
    color: white;
    letter-spacing: 5px;
    font-size: 20px;
    position: relative;
    right: 8px;
  }
  .scan-tip {
    width: 100vw;
    text-align: center;
    color: white;
    font-size: 5vw;
  }
}
</style>
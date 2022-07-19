<template>
  <div><button @click="getStudent">获取学生信息</button></div>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getBaidu() {
      axios.get("http://localhost:8081/baidu/s?ie=UTF-8&wd=vue").then(
        (response) => {
          console.log("成功", response.data);
        },
        (error) => {
          console.log("失败", error.message);
        }
      );
    },
  },
};
</script>


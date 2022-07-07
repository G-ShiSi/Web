<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学校名称：{{ school.name }}</h2>
    <h2>学校地址：{{ school.address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>
<script >
// 组件交互相关的代码
export default {
  name: "School",
  // 组件定义时，不写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器
  data() {
    return {
      school: {
        name: "湖南科技大学",
        address: "湖南湘潭",
      },
    };
  },
  methods: {
    showName() {
      alert(this.school.name);
    },
  },
};
</script>
<style>
/* 组件的样式 */
.demo {
  background-color: aquamarine;
}
</style>
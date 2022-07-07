<template>
  <!-- 组件的结构 -->
  <div class="demo">
    <h2>学生姓名：{{ student.name }}</h2>
    <h2>学生年龄：{{ student.age }}</h2>
  </div>
</template>
<script>
// 组件交互相关的代码
export default {
  name: "Student",
  // 组件定义时，不写el配置项，因为最终所有的组件都要被一个vm管理，由vm决定服务于哪个容器
  data() {
    return {
      student: {
        name: "辜十四",
        age: 20,
      },
    };
  },
};
</script>

<template>
  <div class="student">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age }}</h2>
    <input type="text" v-fbinds:value="name" />
  </div>
</template>

<script>
// import mixin from "../mixin";
export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      name: "辜十四",
      sex: "男",
      age: 20,
    };
  },
  // mixins: [mixin],
};
</script>

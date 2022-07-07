<template>
  <div class="school">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生性别：{{ sex }}</h2>
    <h2>学生年龄：{{ age + 1 }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    console.log(this);
    return {};
  },
  // props: ["name", "sex", "age"],//简单接收
  // props: {
  //   name: String,
  //   age: Number,
  //   sex: String,
  // },
  props: {
    name: {
      type: String,
      reqeired: true,
    },
    age: {
      type: Number,
      default: 99,
    },
    sex: {
      type: String,
      reqeired: true,
    },
  },
};
</script>

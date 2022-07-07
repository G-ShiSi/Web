<template>
  <div>
    <Student name="哈哈" sex="男" :age="16" />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
export default {
  name: "App",
  components: { Student },
  data() {
    return {
      msg: "会当水击三千里",
    };
  },
};
</script>

<style>
</style>
<template>
  <div>
    <Student />
    <School />
  </div>
</template>

<script>
import Student from "./components/Student.vue";
import School from "./components/School.vue";
export default {
  name: "App",
  components: { Student, School },
  data() {
    return {
      msg: "会当水击三千里",
    };
  },
};
</script>

<style>
</style>
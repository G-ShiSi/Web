<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button @click="output">点我输出上方DOM元素</button>
    <School ref="sch"></School>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: { School },
  data() {
    return {
      msg: "会当水击三千里",
    };
  },
  methods: {
    output() {
      console.dir(this.$refs);
    },
  },
};
</script>

<style>
</style>
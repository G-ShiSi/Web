<template >
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutDown"
    >
      <h1 v-show="isShow" key="1">辜十四</h1>
      <!-- <h1 v-show="!isShow" key="2">辜十五</h1> -->
    </transition-group>
  </div>
</template>

<script>
import "animate.css";
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
h1 {
  /* position: absolute; */
  background-color: orange;
  width: 100%;
  transition: 1s;
  /* height: 100%; */
}
</style>
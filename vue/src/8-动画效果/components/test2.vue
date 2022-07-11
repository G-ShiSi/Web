<template >
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group appear name="hello">
      <h1 v-show="isShow" key="1">辜十四</h1>
      <h1 v-show="!isShow" key="2">辜十五</h1>
    </transition-group>
  </div>
</template>

<script>
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
.hello-enter {
  transform: translateX(-100%);
}
.hello-enter-to {
  transform: translateX(0);
}
.hello-leave {
  transform: translateX(0);
}
.hello-leave-to {
  transform: translateX(-100%);
}
</style>
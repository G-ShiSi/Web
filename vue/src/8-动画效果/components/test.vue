<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition appear>
      <h1 v-show="isShow">辜十四</h1>
    </transition>
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
}
.v-enter-active {
  animation: motion 1s forwards;
}
.v-leave-active {
  animation: motion 1s reverse forwards;
}
@keyframes motion {
  0% {
    transform: translateX(-100vw);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
<template>
  <div class="school">
    <h2 @click="show">学校名称：{{ name }}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>

<script>
import mixin from "../mixin";

export default {
  name: "School",
  data() {
    console.log(this);
    return {
      name: "湖南科技大学",
      address: "湖南湘潭",
    };
  },
  // mixins: [mixin],
};
</script>

<template>
  <div class="school">
    <h2>学校名称：{{ name | mySlice }}</h2>
    <h2>地址：{{ address }}</h2>
  </div>
</template>

<script>
// import mixin from "../mixin";

export default {
  name: "School",
  data() {
    console.log(this);
    return {
      name: "湖南科技大学66555",
      address: "湖南湘潭",
    };
  },
  // mixins: [mixin],
};
</script>

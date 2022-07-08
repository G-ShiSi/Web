<template>
  <div class="todo-footer" v-show="itemCount">
    <label>
      <input
        type="checkbox"
        @change="changeCheckBox"
        :checked="checkedItemLength == itemCount && itemCount != 0"
      />
    </label>
    <span>
      <span>已完成{{ checkedItemLength }}</span> / 全部{{ itemCount }}
    </span>
    <button class="btn btn-danger" @click="deleteChecked">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  data() {
    return {};
  },
  methods: {
    deleteChecked() {
      this.checked = "";
      this.deleteCheckedItem();
    },
    changeCheckBox(e) {
      if (e.target.checked) {
        // 全选
        this.selectAllItem(1);
      } else {
        this.selectAllItem(0);
      }
    },
  },
  props: [
    "itemCount",
    "checkedItemLength",
    "deleteCheckedItem",
    "selectAllItem",
  ],
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
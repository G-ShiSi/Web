<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <Top :receive="receive"></Top>
        <List :todos="todos" :deleteItem="deleteItem"></List>
        <Bottom
          :itemCount="this.todos.length"
          :checkedItemLength="checkedItemLength()"
          :deleteCheckedItem="deleteCheckedItem"
          :selectAllItem="selectAllItem"
        ></Bottom>
      </div>
    </div>
  </div>
</template>

<script>
import Top from "./components/Top.vue";
import List from "./components/List.vue";
import Bottom from "./components/Bottom.vue";
export default {
  name: "App",
  data() {
    return {
      todos: JSON.parse(window.localStorage.getItem("todos"))
        ? JSON.parse(window.localStorage.getItem("todos"))
        : [],
    };
  },
  //包含了对todos的增删改查
  methods: {
    // 添加一个todo
    receive(data) {
      this.todos.unshift(data);

      // console.log(this.todos);
    },
    deleteItem(id) {
      this.todos = this.todos.filter((element) => element.id != id);
    },
    checkedItemLength() {
      return this.todos.filter((element) => element.completed == true).length;
    },
    deleteCheckedItem() {
      if (confirm("确认删除？"))
        this.todos = this.todos.filter((element) => element.completed == false);
    },
    selectAllItem(judgement) {
      this.todos.forEach((element) => {
        element.completed = judgement;
      });
    },
  },
  components: { Top, List, Bottom },
  watch: {
    todos: {
      deep: true,
      handler() {
        window.localStorage.setItem("todos", JSON.stringify(this.todos));
        // this.todos = JSON.parse(window.localStorage.getItem("todos"));
      },
    },
  },
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
<template>
  <!-- <el-empty description="购物车为空"></el-empty> -->
  <div class="shop-car">
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="i in count" :key="i" class="infinite-list-item"></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const count = ref(0);
    const load = () => {
      count.value += 2;
    };
    return {
      load,
      count
    };
  }
});
</script>

<style scoped>
.shop-car {
  height: 90%;
  left: 100%;
}
.infinite-list {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 200px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  color: var(--el-color-primary);
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
.box {
  height: 100%;
  /* background-color: red; */
  width: 40%;
}
</style>

<template>
  <div class="left-carousel">
    <el-card shadow="hover" class="box-card">
      <div class="image">
        <el-image :src="url" fit="cover"></el-image>
      </div>
      <el-divider class="divder"></el-divider>

      <h2>商品图</h2>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    const url = computed(() => store.state.detailGoods.url);

    return {
      url
    };
  }
});
</script>

<style scoped>
.box-card {
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100%;
}
.image {
  text-align: center;
  height: 330px;
  width: 500px;
  overflow: hidden;
}
</style>

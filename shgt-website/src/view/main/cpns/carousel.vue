<template>
  <div class="carousel">
    <el-carousel :interval="4000" type="card" height="150px">
      <el-carousel-item v-for="item in carousels" :key="item.id">
        <el-image class="image" :src="item.url" fit="cover"></el-image>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const carousels = computed(() => store.state.mainCarousel);

    return {
      carousels
    };
  }
});
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.image {
  height: 100%;
  width: 100%;
}
</style>

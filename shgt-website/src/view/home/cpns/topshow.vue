<template>
  <div>
    <el-affix position="bottom" :offset="20" class="fix">
      <div class="block">
        <el-carousel trigger="click" height="150px">
          <el-carousel-item
            class="image-container"
            v-for="item in carousels"
            :key="item.id"
          >
            <el-image :src="item.url" fit="cover"></el-image>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-affix>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    const carousels = computed(() => store.state.homeCarousel);
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
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

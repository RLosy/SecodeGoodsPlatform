<template>
  <div class="shop-car">
    <!-- <el-empty description="购物车为空"></el-empty> -->
    <show-scroll></show-scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import showScroll from '@/components/showScroll/showScroll.vue';

export default defineComponent({
  components: {
    showScroll
  },
  setup() {
    return {};
  }
});
</script>

<style scoped>
.shop-car {
  height: 100%;
  width: 100%;
}
</style>

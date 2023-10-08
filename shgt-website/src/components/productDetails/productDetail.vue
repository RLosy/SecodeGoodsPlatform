<template>
  <div class="product-detail">
    <left-carousel />

    <el-divider class="divder" direction="vertical"></el-divider>

    <right-description />
    <el-button @click="goMain" class="btn" type="primary">返回主页</el-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import leftCarousel from './cpns/leftCarousel.vue';
import rightDescription from './cpns/rightDescription.vue';

export default defineComponent({
  components: {
    leftCarousel,
    rightDescription
  },
  setup() {
    const router = useRouter();
    const goMain = () => router.push('/main');
    return {
      goMain
    };
  }
});
</script>

<style scoped>
.product-detail {
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 480px;
  margin: 10px auto;
}
.divder {
  height: 100%;
}
.btn {
  position: absolute;
  right: -107px;
  top: 222px;
}
</style>

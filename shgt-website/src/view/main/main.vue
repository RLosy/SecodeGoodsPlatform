<template>
  <div class="main">
    <el-affix position="top">
      <navbar />
    </el-affix>

    <search />
    <category />

    <el-divider class="divder"></el-divider>
    <carousel />
    <el-divider class="divder1"></el-divider>

    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import navbar from '@/components/navBar/navbar.vue';
import search from '@/view/search/search.vue';
import carousel from './cpns/carousel.vue';
import category from './cpns/category.vue';

export default defineComponent({
  components: {
    navbar,
    search,
    carousel,
    category
  },
  setup() {
    const store = useStore();
    store.dispatch('checkIsLogin');
    store.dispatch('getCarousel');
    return {};
  }
});
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
.divder {
  margin-bottom: -2px;
}
.divder1 {
  margin: 0px auto;
}
</style>

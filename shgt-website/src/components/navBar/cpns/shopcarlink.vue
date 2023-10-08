<template>
  <div>
    <el-badge
      :value="shopcarCount"
      type="primary"
      class="item"
      @click="showShopCar"
    >
      <el-button type="info">
        我的收藏<el-icon class="el-icon--right"><ShoppingCartFull /></el-icon>
      </el-button>
    </el-badge>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ShoppingCartFull } from '@element-plus/icons-vue';
import { isLogin } from '@/hooks/isLogin';
import { notLogin } from '@/hooks/message';

export default defineComponent({
  components: {
    ShoppingCartFull
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    const shopcarCount = computed(() => store.state.shopCarGoods.length);
    const showShopCar = () => {
      const result = isLogin();
      if (result) {
        router.push('/home/shopcar');
        return;
      }
      notLogin();
    };
    return {
      showShopCar,
      shopcarCount
    };
  }
});
</script>

<style scoped></style>

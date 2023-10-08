<template>
  <div class="goods-list">
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li
        v-for="goods in imageDatas"
        :key="goods.id"
        class="infinite-list-item"
      >
        <goods-card :singlegoods="goods" />
      </li>
    </ul>

    <el-affix class="affix">
      <el-button
        @click="jumpToUpload"
        size="large"
        color="#409eff"
        type="danger"
        :icon="Upload"
        circle
      />
    </el-affix>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { Top, Upload } from '@element-plus/icons-vue';
import goodsCard from '@/components/displayGoodsCard/goodsCard.vue';
import { isLogin } from '@/hooks/isLogin';
import { notLogin } from '@/hooks/message';

export default defineComponent({
  components: {
    goodsCard
  },
  setup() {
    const router = useRouter();
    const store = useStore();
    store.dispatch('getImageUrls');

    const imageDatas = computed(() => store.state.imageDatas);

    const count = ref(0);
    const load = () => {
      count.value = imageDatas.value.length;
      // store.dispatch('getImageUrls');
    };

    const jumpToUpload = () => {
      const result = isLogin();
      if (!result) {
        notLogin();
        return;
      }
      router.push({
        name: 'uploadgoods',
        path: '/uploadgoods'
      });
    };
    return {
      load,
      count,
      Top,
      imageDatas,
      Upload,
      jumpToUpload
    };
  }
});
</script>

<style scoped>
.goods-list {
  position: relative;
  width: 90%;
  height: 540px;
  margin: 0 auto;
}
.infinite-list {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  list-style: none;
}
.infinite-list .infinite-list-item {
  height: 370px;
  width: 280px;
  text-align: center;
  background: var(--el-color-primary-light-9);
  margin: 10px 10px;
  color: var(--el-color-primary);
}
.affix {
  position: absolute;
  top: 200px;
  left: 5px;
}
</style>

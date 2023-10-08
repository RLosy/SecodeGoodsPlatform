<template>
  <div class="goods-card" @click="jumpToProductDetail()">
    <el-card class="card" shadow="hover">
      <div class="image-container">
        <el-image fit="cover" :src="singlegoods.url"></el-image>
      </div>

      <el-divider class="divder"></el-divider>

      <p class="description">
        {{ singlegoods.description }}
      </p>

      <el-divider class="divder"></el-divider>

      <div class="bottom-content">
        <el-avatar :size="60" :src="singlegoods.user.avatar_url"></el-avatar>
        <el-tag>{{ ways[0] }}</el-tag>
        <el-tag type="success"
          ><span v-if="ways[1]">{{ ways[1] }}</span
          ><span v-else>不交换</span></el-tag
        >
        <el-button
          @click.stop="addToShopCar"
          type="primary"
          :icon="ShoppingCartFull"
          >添加</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import { ShoppingCartFull } from '@element-plus/icons-vue';
import { addShopCarHooks } from './hooks/addToShopCar';
import { isLogin } from '@/hooks/isLogin';
import { notLogin } from '@/hooks/message';

export default defineComponent({
  props: {
    singlegoods: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();
    const store = useStore();

    const ways = props.singlegoods.deal_way.split(',');
    const { id } = toRefs(props.singlegoods.user);

    const { addToShopCar } = addShopCarHooks(
      id.value, // 用户id
      props.singlegoods.url,
      props.singlegoods.description,
      ways,
      props.singlegoods.id
    );

    const jumpToProductDetail = () => {
      const result = isLogin();
      if (result) {
        store.commit('storeDetails', props.singlegoods);
        router.push({
          name: 'details',
          path: '/main/prodetails'
        });
        return;
      }
      notLogin();
    };

    return {
      jumpToProductDetail,
      ShoppingCartFull,
      addToShopCar,
      ways
    };
  }
});
</script>

<style scoped>
.goods-card {
  height: 100%;
  width: 100%;
}
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.image-container {
  width: 250px;
  height: 200px;
  overflow: hidden;
  text-align: center;
}
.description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 25px;
}
.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 250px;
}
.image {
  width: 250px;
  height: 200px;
  object-fit: fill;
}
.divder {
  margin: 10px 0;
}
</style>

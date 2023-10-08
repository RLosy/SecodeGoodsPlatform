<template>
  <!-- <el-empty description="购物车为空"></el-empty> -->
  <div class="publish-goods">
    <ul v-infinite-scroll="load" class="infinite-list" style="overflow: auto">
      <li v-for="item in goods" :key="item.id" class="infinite-list-item">
        <el-image
          style="width: 252px; height: 198px"
          :src="item.url"
          fit="cover"
        />

        <div class="pub-user">
          <span>发布者</span>
          <el-avatar :size="80" :src="item.user.avatar_url" />
          <span
            >发布者昵称：<span class="span">{{
              item.user.nickName
            }}</span></span
          >
        </div>

        <div class="desc">
          <el-divider />
          <p class="p">
            <span class="span">描述：</span>{{ item.description }}
          </p>
        </div>
        <el-popconfirm
          @confirm="confirmDelete(item.id)"
          confirm-button-text="确定"
          cancel-button-text="取消"
          class="delete"
          title="确定删除购物车吗？"
        >
          <template #reference>
            <el-button type="primary" :icon="Delete" circle />
          </template>
        </el-popconfirm>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { Delete } from '@element-plus/icons-vue';
import { confirmDeleteGood } from './hooks/confirmDelete';

export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch('getShopCar');

    const { confirmDelete } = confirmDeleteGood();

    const length = ref(store.state.shopCarGoods.length);
    const goods = computed(() => store.state.shopCarGoods);

    const count = ref(0);
    const load = () => {
      count.value = length.value;
    };

    return {
      load,
      count,
      goods,
      confirmDelete,
      Delete
    };
  }
});
</script>

<style scoped>
.publish-goods {
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
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 200px;
  background: var(--el-color-primary-light-9);
  margin: 10px;
  background-color: #ffffff;
}
.infinite-list .infinite-list-item + .list-item {
  margin-top: 10px;
}
.desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 252px;
}
.p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.span {
  color: #409eff;
}
.pub-user {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  width: 250px;
}
.el-button {
  position: absolute;
  top: 2px;
  right: 2px;
}
</style>

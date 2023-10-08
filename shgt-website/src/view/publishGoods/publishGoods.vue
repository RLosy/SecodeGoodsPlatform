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
        <div class="desc">
          <p>
            <span class="span">发布日期：</span
            >{{ item.createAt.split('T')[0] }}
          </p>
          <el-divider />
          <p class="p">
            <span class="span">描述：</span>{{ item.description }}
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch('getPublishGoods');
    const length = ref(store.state.userPublishGoods.length);
    const goods = computed(() => store.state.userPublishGoods);

    const count = ref(0);
    const load = () => {
      count.value = length.value;
    };
    const confirm = (id: number) => {
      console.log(id);
    };
    return {
      load,
      count,
      goods,
      confirm
    };
  }
});
</script>

<style scoped>
.publish-goods {
  /* position: relative; */
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
</style>

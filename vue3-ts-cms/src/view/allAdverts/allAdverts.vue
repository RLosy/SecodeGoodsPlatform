<template>
  <div class="all-advert">
    <ul>
      <li class="li" v-for="item in allAdverts" :key="item">
        <div>
          <img :src="item.url" />
        </div>
        <div>商家：{{ item.business }}</div>
        <div>分组：{{ item.ad_groups }}</div>
        <div>
          <el-popconfirm
            title="确定删除此广告吗?"
            confirmButtonText="确定"
            cancelButtonText="取消"
            @confirm="confirmDelte(item.id)"
          >
            <template #reference>
              <el-button type="primary" :icon="Delete" circle />
            </template>
          </el-popconfirm>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import axios from 'axios';
import { Delete } from '@element-plus/icons-vue';
import { messageOut } from '@/hooks/messageHooks';

export default defineComponent({
  setup() {
    const allAdverts = ref([]);
    const newAxios = axios.create({ baseURL: 'http://localhost:8000/' });
    const getAdverts = async () => {
      const result = await newAxios.get('adverts');
      allAdverts.value = result.data.data;
      console.log(allAdverts.value);
    };
    getAdverts();
    const confirmDelte = async (id: number) => {
      const result = await axios.delete(`user/advert/${id}`);
      getAdverts();
      messageOut('删除成功！！', 'success');
      return result;
    };
    return {
      allAdverts,
      Delete,
      confirmDelte
    };
  }
});
</script>

<style scoped>
.all-advert {
  width: 100%;
  height: 100%;
}
.li {
  display: flex;
  justify-content: space-between;
  height: 300px;
  margin-bottom: 10px;
}
img {
  height: 150px;
  width: 600px;
}
</style>

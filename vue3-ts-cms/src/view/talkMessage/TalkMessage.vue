<template>
  <div class="talk-message">
    <ul>
      <li class="li" v-for="item in allMessage" :key="item">
        <span>{{ item.content }}</span>
        <span>{{ item.createAt.split('T')[0] }}</span>
        <div class="delete">
          <el-popconfirm
            title="确定删除此信息?"
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
import { defineComponent, onMounted, ref } from 'vue';
import { Delete } from '@element-plus/icons-vue';
import axios from 'axios';
import { messageOut } from '@/hooks/messageHooks';

export default defineComponent({
  setup() {
    const allMessage = ref([]);
    const getMessage = async () => {
      const messages = await axios.get('user/talk');
      allMessage.value = messages.data;
    };
    onMounted(() => getMessage());
    const confirmDelte = async (id: number) => {
      const result = await axios.delete(`user/talk/${id}`);
      if (result.data.stateCode === 200) {
        messageOut('信息已被删除！', 'success');
        getMessage();
      }
    };
    return {
      allMessage,
      confirmDelte,
      Delete
    };
  }
});
</script>

<style scoped>
.talk-message {
  height: 100%;
  width: 100%;
}
.li {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 2px;
  padding-right: 100px;
  margin-bottom: 20px;
  border-bottom: 1px solid #a8a8a8;
}
.delete {
  position: absolute;
  right: 3px;
  top: -12px;
}
</style>

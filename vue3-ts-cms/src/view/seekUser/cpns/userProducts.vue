<template>
  <div class="products">
    <el-empty v-if="!products.length" description="该用户未发布任何商品" />
    <el-card
      v-else
      class="card"
      v-for="item in products"
      :key="item"
      shadow="hover"
    >
      <div class="content">
        <el-image class="image" :src="item.url" fit="cover" />
        <el-divider class="divider" direction="vertical" />
        <div class="desc">商品描述：{{ item.description }}</div>
        <el-divider class="divider" direction="vertical" />
        <div>商品分类：{{ item.category }}</div>
        <el-divider class="divider" direction="vertical" />
        <div>发布时间：{{ item.createAt.split('T')[0] }}</div>
        <el-popconfirm
          confirmButtonText="确定"
          cancelButtonText="取消"
          title="您确定要删除该用户此商品吗？"
          @confirm="deleteBtn(item.id)"
        >
          <template #reference>
            <el-button type="primary" :icon="Delete" circle />
          </template>
        </el-popconfirm>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import axios from 'axios';
import { Delete } from '@element-plus/icons-vue';
import { useStore } from 'vuex';
import { deleteProduct } from '@/hooks/messageHooks';

export default defineComponent({
  props: {
    value: {
      type: String,
      required: true
    },
    input: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const store = useStore();
    const products = computed(() => store.state.certainUser.userProducts);

    const deleteBtn = async (id: number) => {
      const condition = props.value.split('.')[0];
      const seekValue = props.input;
      const result = await axios.delete(`/user/deletePro/${id}`);
      store.dispatch('getCertainUser', { condition, seekValue });
      if (result.data.stateCode === 200) {
        deleteProduct();
      }
    };

    return {
      products,
      Delete,
      deleteBtn
    };
  }
});
</script>

<style scoped>
.card {
  height: 250px;
  margin: 10px 5px;
  padding-bottom: 30px;
}
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 250px;
}
.image {
  height: 100%;
  width: 300px;
  margin-bottom: 10px;
}
.divider {
  height: 100%;
}
.desc {
  width: 260px;
}
</style>

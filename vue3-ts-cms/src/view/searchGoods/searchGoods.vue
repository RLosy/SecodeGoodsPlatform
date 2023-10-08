<template>
  <div class="search-goods">
    <search-condition ref="son" />
    <el-divider />
    <ul class="goods">
      <li v-for="item in products" :key="item.id">
        <el-card class="goods-card" shadow="hover">
          <div class="content">
            <el-image
              style="width: 230px; height: 230px"
              :src="item.url"
              fit="cover"
            />
            <el-divider class="divider" direction="vertical" />
            <div class="content-son">
              <div class="title">发布时间：</div>
              <div>{{ item.createAt.split('T')[0] }}</div>
              <div class="title">分类：</div>
              <div>{{ item.category }}</div>
              <div class="title">处理类型：</div>
              <div>{{ item.deal_way }}</div>
            </div>
            <el-divider class="divider" direction="vertical" />
            <div class="desc">
              <span class="title">描述:</span>{{ item.description }}
            </div>
            <el-divider class="divider" direction="vertical" />
            <div class="content-son">
              <div>
                <span class="title">发布者昵称：</span>{{ item.user.nickName }}
              </div>
              <div>
                <span class="title">发布者账号：</span>{{ item.user.account }}
              </div>
            </div>
            <div class="deletBtn">
              <el-popconfirm
                confirm-button-text="确定"
                cancel-button-text="取消"
                :icon="InfoFilled"
                icon-color="red"
                title="确定删除该商品吗?"
                @confirm="confirmDelete(item.id, changeSortValue)"
              >
                <template #reference>
                  <el-button type="primary" :icon="Delete" circle />
                </template>
              </el-popconfirm>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import { InfoFilled, Delete } from '@element-plus/icons-vue';
import searchCondition from './cpns/searchCondition.vue';
import { deleteProduct } from '@/hooks/messageHooks';

export default defineComponent({
  components: {
    searchCondition
  },
  setup() {
    const store = useStore();
    const products = computed(() => store.state.productsBySearch);
    type myType = InstanceType<typeof searchCondition>;
    const son = ref<myType>();
    const confirmDelete = async (id: number) => {
      const result = await axios.delete(`/products/${id}`);

      if (result.data.stateCode === 203) {
        son.value?.searchBtn();
        deleteProduct();
      }
    };

    return {
      products,
      InfoFilled,
      Delete,
      confirmDelete,
      son
    };
  }
});
</script>

<style scoped>
.search-goods {
  width: 100%;
  height: 100%;
}
.all-goods,
.goods-card {
  height: 100%;
  width: 100%;
}
.top-title {
  display: flex;
  justify-content: space-around;
}
.sort-title,
.goods-count {
  margin-right: 40px;
  color: #786266;
  font-size: 13px;
}
.content {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-around;
}
.goods-count {
  font-size: 14px;
  margin-top: 10px;
}
.goods li {
  list-style: none;
  height: 270px;
  margin: 0px 2px 20px;
}
.divider {
  height: 15em;
}
.content-son {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.desc {
  width: 100px;
  line-height: 25px;
}
.title {
  color: #409eff;
}
.deletBtn {
  position: absolute;
  top: -11px;
  right: 2px;
}
</style>

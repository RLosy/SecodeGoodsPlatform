<template>
  <div class="right-description">
    <el-card shadow="hover" class="box-card">
      <div class="avatar">
        <el-avatar :size="100" :src="avatar_url"></el-avatar>

        <el-divider class="avatar-divder" direction="vertical"></el-divider>

        <div class="acount">
          <div>昵称：{{ nickName }}</div>
          <div>账号：{{ account }}</div>
        </div>
      </div>

      <el-divider border-style="dashed"></el-divider>

      <div class="description">{{ goods.description }}</div>

      <el-divider border-style="dashed"></el-divider>

      <div class="bottom-content">
        <el-button @click="jumpToTalk" size="large" type="primary">
          给卖家留言<el-icon class="el-icon--right"><chat-square /></el-icon>
        </el-button>
      </div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { ChatSquare } from '@element-plus/icons-vue';

export default defineComponent({
  components: {
    ChatSquare
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const user = reactive(store.state.detailGoods.user);
    const goods = reactive(store.state.detailGoods);

    const { nickName, avatar_url, account, id: user_id } = toRefs(user);

    const jumpToTalk = () => {
      store.commit('storeTalkGoods', goods.url);
      router.push({
        name: 'talk',
        path: '/home/talk',
        params: {
          reveiveUserId: user_id.value,
          avatar: avatar_url.value,
          goodsUrl: goods.url
        }
      });
    };

    return {
      goods,
      account,
      nickName,
      avatar_url,
      jumpToTalk
    };
  }
});
</script>

<style scoped>
.right-description {
  width: 50%;
  height: 100%;
}
.box-card {
  height: 100%;
}
.avatar {
  display: flex;
  justify-content: space-around;
}
.avatar,
.bottom-content,
.avatar-divder {
  height: 100px;
}
.bottom-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.description {
  height: 140px;
}
.acount {
  line-height: 45px;
}
</style>

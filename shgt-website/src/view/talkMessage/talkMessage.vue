<template>
  <div class="message">
    <ul>
      <li
        @click="
          jumpToTalk(item.receive_user_id, item.user.avatar_url, item.goods_url)
        "
        class="li"
        v-for="item in ISends"
        :key="item"
      >
        <el-card class="card" shadow="hover">
          <el-avatar :size="80" :src="item.user.avatar_url" />
          {{ item.user.nickName }}
        </el-card>
        <img class="img1" :src="item.goods_url" />
      </li>
    </ul>
    <el-divider />
    <ul>
      <li
        @click="
          jumpToTalk1(item.send_user_id, item.user.avatar_url, item.goods_url)
        "
        class="li"
        v-for="item in IReceive"
        :key="item"
      >
        <el-card class="card" shadow="hover">
          <el-avatar :src="item.user.avatar_url" :size="80" />{{
            item.user.nickName
          }}
        </el-card>
        <img class="img1" :src="item.goods_url" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();

    const currentUserId = computed(() => store.state.user.id);
    store.dispatch('getMessageUsers', currentUserId);
    const ISends = computed(() => store.state.userSendMsg);
    const IReceive = computed(() => store.state.userReceiveMsg);

    const jumpToTalk = (receiveId: any, avatar: string, goodsUrl: string) => {
      store.commit('storeTalkGoods', goodsUrl);
      router.push({
        name: 'talk',
        path: '/home/talk',
        params: {
          reveiveUserId: receiveId,
          avatar,
          goodsUrl
        }
      });
    };
    const jumpToTalk1 = (receiveId: any, avatar: string, goodsUrl: string) => {
      store.commit('storeTalkGoods', goodsUrl);
      router.push({
        name: 'talk',
        path: '/home/talk',
        params: {
          reveiveUserId: receiveId,
          avatar,
          goodsUrl
        }
      });
    };
    return {
      jumpToTalk,
      jumpToTalk1,
      ISends,
      IReceive
    };
  }
});
</script>

<style scoped>
.message {
  height: 100%;
  overflow: scroll;
}
.li {
  position: relative;
  height: 110px;
  list-style: none;
  margin: 10px 2px;
}
.card {
  height: 100%;
}
.img1 {
  position: absolute;
  top: 0;
  right: 20px;
  height: 100%;
  width: 150px;
}
</style>

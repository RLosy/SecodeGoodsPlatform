<template>
  <div class="talk">
    <div class="talk-info">
      <ul>
        <li class="li" v-for="item in messages" :key="item">
          <div class="hisWords" v-if="!(currentUserId === item.send_user_id)">
            <div class="hinfo">
              <div><el-avatar :size="50" :src="avatar" /></div>
              <p class="hp">{{ item.content }}</p>
              <p class="date">{{ item.createAt.split('T')[0] }}</p>
            </div>
          </div>
          <div class="mywords" v-else>
            <div class="myinfo">
              <p class="mp">{{ item.content }}</p>
              <div><el-avatar :size="50" :src="IAvatar" /></div>
              <p class="mydate">{{ item.createAt.split('T')[0] }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="input">
      <el-input
        @input="isNull"
        class="input-info"
        v-model="message"
        placeholder="输入留言"
      />
      <el-button
        @click="sendBtn(currentUserId, reveiveUserId, message, goodsUrl)"
        :disabled="isDisabled"
        type="primary"
        >发送</el-button
      >
    </div>

    <img class="img" :src="currentUrl" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import { sendMessage } from './hooks/sendMessageContrlo';

export default defineComponent({
  setup() {
    const route = useRoute();
    const store = useStore();

    const currentUrl = computed(() => store.state.currentTalkGoods);

    const tag = ref(true);
    const message = ref('');
    const isDisabled = ref(true);
    const isNull = () => {
      if (message.value) {
        isDisabled.value = false;
      } else {
        isDisabled.value = true;
      }
    };

    const reveiveUserId = computed(() => route.params.reveiveUserId);
    const avatar = computed(() => route.params.avatar);
    const goodsUrl = computed(() => route.params.goodsUrl);

    const IAvatar = computed(() => store.state.user.avatar);
    const currentUserId = computed(() => store.state.user.id);
    const { sendBtn } = sendMessage();
    store.dispatch('getTalkMessage', {
      reveiveUserId: reveiveUserId.value,
      currentUserId: currentUserId.value
    });
    // 进入组件开始定时轮询
    const timer = setInterval(() => {
      store.dispatch('getTalkMessage', {
        reveiveUserId: reveiveUserId.value,
        currentUserId: currentUserId.value
      });
    }, 1000);
    // 离开组件时清除定时轮询
    onUnmounted(() => clearInterval(timer));

    const messages = computed(() => store.state.talkMessage);

    return {
      tag,
      message,
      isNull,
      isDisabled,
      sendBtn,
      reveiveUserId,
      currentUserId,
      messages,
      avatar,
      IAvatar,
      currentUrl,
      goodsUrl
    };
  }
});
</script>

<style scoped>
.talk {
  position: relative;
  height: 100%;
  /* overflow: scroll; */
}
.talk-info {
  overflow: scroll;
  overflow-x: hidden;
  height: 80%;
  width: 80%;
  border: 1px solid #79bbff;
  margin-bottom: 10px;
}
.li {
  height: 80px;
  list-style: none;
  margin: 10px 2px;
  padding: 10px;
}
.mywords {
  float: right;
}
.hisWords {
  float: left;
  padding: 10px;
}

.input {
  display: flex;
  margin-left: 14px;
}
.input-info {
  width: 600px;
}
.myinfo,
.hinfo {
  position: relative;
  display: flex;
}

.mp,
.hp {
  background-color: #409eff;
  padding: 15px;
  border-radius: 7px;
  line-height: 10px;
}
.hp {
  background-color: white;
}
.date,
.mydate {
  position: absolute;
  width: 400px;
  top: -25px;
  left: 69px;
  font-size: 10px;
  color: #909399;
}
.mydate {
  top: -18px;
  left: -14px;
}
.img {
  width: 150px;
  position: absolute;
  top: 0px;
  right: -1px;
  border: 2px solid #409eff;
  padding: 2px;
}
</style>

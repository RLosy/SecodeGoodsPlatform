<template>
  <div class="user_msg">
    <el-card class="msg_card" shadow="hover">
      <div class="show-avatar">
        <el-avatar :size="80" :src="avatar" />
        <p>昵称：{{ nickName }}</p>
        <p>账号：{{ account }}</p>
      </div>

      <el-divider />
      <p>总计卖出：<span class="span">10</span>件商品</p>
      <el-divider />
      <p>总计买入：<span class="span">7</span>件商品</p>
      <el-divider />
      <p>个性签名：面朝大海，春暖花开，且行且珍惜！！</p>
      <el-divider />
      <p>
        个人简介：我一直在想，假如查尔斯王子只是一个普通的男人，
        那个19岁的黛安娜还会在明知他另有所爱的情况下嫁给他吗?
        在黛安娜一段公开的录像中，她曾经说大婚那—天:"我的心像死—样平静
        ，我感觉自己像待幸的羔羊。"
      </p>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();
    store.dispatch('checkIsLogin');
    const user = reactive(store.state.user);
    const { account, nickName, avatar } = toRefs(user);

    return {
      account,
      nickName,
      avatar
    };
  }
});
</script>

<style scoped>
.user_msg {
  height: 100%;
  height: 100%;
}
.msg_card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
}
.show-avatar {
  display: flex;
  justify-content: space-around;
  line-height: 50px;
}
.span {
  color: #409eff;
  margin: 0 10px;
}
</style>

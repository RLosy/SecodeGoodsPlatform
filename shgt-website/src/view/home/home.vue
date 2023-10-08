<template>
  <div class="home">
    <el-affix position="top">
      <navbar />
    </el-affix>

    <el-divider />

    <topshow class="topshow" />

    <el-divider />

    <div class="content">
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-sub-menu index="1">
          <template #title>
            <el-icon><avatar /></el-icon>
            <span>个人中心</span>
          </template>
          <el-menu-item index="1-1" @click="showPersonMsg"
            >个人资料</el-menu-item
          >
          <el-menu-item @click="showShopCar" index="1-2">我的收藏</el-menu-item>
          <el-menu-item index="1-3" @click="jumpToMessage"
            >我的消息</el-menu-item
          >
          <el-menu-item index="1-4" @click="jumpToUpdate"
            >修改资料</el-menu-item
          >
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title>
            <el-icon><iconMenu /></el-icon>
            <span>商品管理</span>
          </template>
          <!-- <el-menu-item @click="jumpTodeal" index="2-1">成交商品</el-menu-item> -->
          <el-menu-item @click="jumpToPublish" index="2-2"
            >我发布的</el-menu-item
          >
        </el-sub-menu>

        <el-sub-menu index="3" disabled>
          <template #title>
            <el-icon><setting /></el-icon>
            <span>系统设置</span>
          </template>
          <el-menu-item index="3-1">个人资料</el-menu-item>
          <el-menu-item index="3-2">我的收藏</el-menu-item>
          <el-menu-item index="3-3">我的消息</el-menu-item>
          <el-menu-item index="3-4">修改资料</el-menu-item>
        </el-sub-menu>
      </el-menu>
      <!-- 二级路由显示组件 -->
      <div class="right">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { Menu as IconMenu, Setting, Avatar } from '@element-plus/icons-vue';
import navbar from '@/components/navBar/navbar.vue';
import topshow from './cpns/topshow.vue';

export default defineComponent({
  components: {
    navbar,
    Avatar,
    IconMenu,
    Setting,
    topshow
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    store.dispatch('checkIsLogin');
    const showPersonMsg = () => router.push('/home/personmsg');
    const showShopCar = () => router.push('/home/shopcar');
    const jumpToUpdate = () => router.push('/home/update');
    const jumpTodeal = () => router.push('/home/deal');
    const jumpToPublish = () => router.push('/home/publish');
    const jumpToMessage = () => router.push('/home/message');

    return {
      showPersonMsg,
      showShopCar,
      jumpToUpdate,
      jumpTodeal,
      jumpToPublish,
      jumpToMessage
    };
  }
});
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.content {
  display: flex;
  width: 80%;
  margin: 10px auto;
}
.right {
  height: 600px;
  width: 900px;
  margin-left: 75px;
}
</style>

import { ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export const checkClick = () => {
  const store = useStore();
  const router = useRouter();

  const newNickName = ref('');
  const newPassword = ref('');

  const updateNickName = () =>
    store.dispatch('netUtils/updateNickName', newNickName.value);
  const updatePassword = () => {
    store.dispatch('netUtils/updatePassword', newPassword.value);
    router.push('/login');
  };

  const isDisable1 = ref(true);
  const isDisable2 = ref(true);

  const isNull1 = () => {
    if (newNickName.value.length !== 0) {
      isDisable1.value = false;
    } else {
      isDisable1.value = true;
    }
  };

  const isNull2 = () => {
    if (newPassword.value.length !== 0) {
      isDisable2.value = false;
    } else {
      isDisable2.value = true;
    }
  };

  return {
    newNickName,
    newPassword,
    updateNickName,
    updatePassword,
    isDisable1,
    isDisable2,
    isNull1,
    isNull2
  };
};

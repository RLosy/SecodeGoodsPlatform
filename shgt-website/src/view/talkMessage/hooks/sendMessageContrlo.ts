import axios from 'axios';
import { useStore } from 'vuex';

export const sendMessage = () => {
  const store = useStore();
  const sendBtn = async (
    sendUserId: number,
    receiveUserId: number,
    content: string,
    goodsUrl: string
  ) => {
    receiveUserId *= 1;
    const result = await axios.post('/api/user/talk', {
      sendUserId,
      receiveUserId,
      content,
      goodsUrl
    });
    store.dispatch('getTalkMessage', {
      reveiveUserId: receiveUserId,
      currentUserId: sendUserId
    });
    return result;
  };

  return {
    sendBtn
  };
};

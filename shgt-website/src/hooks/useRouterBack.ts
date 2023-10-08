import { useRouter } from 'vue-router';
const router = useRouter();

export const goBack = () => router.go(-1);

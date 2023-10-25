<template>
	<div>
		<h2>게시글 수정</h2>
		<hr class="my-4" />
		<PostForm
			v-model:title="form.title"
			v-model:content="form.content"
			@submit.prevent="edit"
		>
			<template #action>
				<div class="pt-4">
					<button
						type="button"
						class="btn btn-outline-dark me-2"
						@click="goDetailPage"
					>
						취소
					</button>
					<button class="btn btn-primary">수정</button>
				</div>
			</template>
		</PostForm>
		<!--<AppAlert :show="showAlert" :message="alertMessage" :type="alertType" />-->
		<AppAlert :items="alerts"></AppAlert>
	</div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getPostById, updatePost } from '@/api/posts';
import PostForm from '@/components/posts/PostForm.vue';
import AppAlert from '@/components/AppAlert.vue';

const route = useRoute();
const router = useRouter();
const id = route.params.id;

const form = ref({
	title: null,
	content: null,
});
const fetchPost = async () => {
	try {
		const { data } = await getPostById(id);
		setForm(data);
	} catch (error) {
		console.error(error);
		vAlert(error.message);
	}
};
const setForm = ({ title, content }) => {
	form.value.title = title;
	form.value.content = content;
};
fetchPost();
const edit = async () => {
	try {
		await updatePost(id, { ...form.value });
		//router.push({ name: 'PostDetail', params: { id } });
		vAlert('수정이 완료되었습니다.', 'success');
	} catch (error) {
		console.log(error);
		vAlert('수정실패', 'success');

	}
};

const goDetailPage = () => router.push({ name: 'PostDetail', params: { id } });

// alert
const alerts = ref([]);
const vAlert = (message, type = 'error') => {
	console.log('message', message);
	console.log('type', type);
	alerts.value.push({ message, type });
	console.log('alerts', alerts);
	setTimeout(() => {
		alerts.value.shift();
		//showAlert.value = false;
	}, 3000);
};
</script>

<style lang="scss" scoped></style>

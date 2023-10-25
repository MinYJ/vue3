<template>
	<main>
		<div class="container py-4">
			<!-- <router-view></router-view> -->
			<content></content>
		</div>
	</main>
</template>

<script setup>
import {ref, defineAsyncComponent, onMounted} from 'vue'
import {useRoute} from 'vue-router'

const route = useRoute();
let uiName = route.params.view;
let content = null;
uiName=(uiName)?uiName:'HomeView';
console.log(uiName);
content=defineAsyncComponent(()=>import(`@/views/${uiName}.vue`));
</script>

<style lang="scss" scoped></style>

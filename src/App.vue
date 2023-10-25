<template>
	<TheHeader></TheHeader>
	<router-view v-slot="{Component, route}">
		<component :is="Component" :key="route.path"></component>
	</router-view>
<!-- <TheView></TheView> -->
</template>

<script setup>
import TheHeader from '@/layouts/TheHeader.vue';
import TheView from '@/layouts/TheView.vue';
import { ref, computed, onMounted } from 'vue';
import { userDataStore } from '@/store/store.js';
//import { currencyPairStore } from '@/store/currencyPair';

onMounted(()=>{
	setDefault();
})

const setDefault = () => {
	const info = {};
	info.crncy = ['USD/KRW', 'JPY/KRW', 'EUR/KRW', 'CNY/KRW', 'CHF/KRW', 'CAD/KRW',
		'HKD/KRW', 'SGD/KRW', 'GBP/KRW', 'AUD/KRW', 'NZD/KRW', 'SEK/KRW', 'DKK/KRW', 'NOK/KRW', 'THB/KRW'
	]

	const afterLoginStore = userDataStore();
	afterLoginStore.setStore(info);
	console.log(afterLoginStore.store)
}
</script>

<style lang="scss" scoped></style>

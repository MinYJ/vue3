<template>
	<h2>CurrencyPair View</h2>
	<p>{{ $route.path }}</p>
	<p>{{ $route.name }}</p>

  <div class="inputField">
    <input type="text"
      placeholder="통화쌍을 선택하세요"
      :value="inputValue"
      list="01"
      @change="valueChange($event)"
      @focus="onFocus($event)"
    />
    <datalist id="01">
      <option v-for="(item, index) in currencyItems" :key="index">{{ item }}</option>
    </datalist>
  </div>
</template>

<script setup>
  import { ref, computed, onBeforeMount } from 'vue';
  import { userDataStore } from '@/store/store';

  const afterLoginStore = userDataStore();
  const afterLoginData = computed(_=>afterLoginStore.store).value;
  const currencyItems = afterLoginData.crncy;

  let inputValue='USD/KRW';

  const onFocus = (event)=>{
    event.target.select()
  }

  const valueChange = (event) => {
    console.log(event.target);
    console.log(event.target.value);
  }
</script>

<style lang="scss" scoped>

</style>
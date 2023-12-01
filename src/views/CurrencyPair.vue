<template>
  <h1>Currency Pair</h1>
  <div class="example">
    <currencyPair ref="currencyPair_01" :option="option"></currencyPair>
    <currencyPair></currencyPair>
  </div>
  <div>
    <button @click="getOption()">1번</button>
  </div>
</template>

<script setup>
  import {ref} from 'vue';
  import currencyPair from '@/components/currencyPair.vue';

  let option = ref({});
  const getOption = ()=>{
    option.value['linkId'] = false;
    option.value['value'] = 'JPY/KRW'; 
  }
</script>

<style lang="scss" scoped>

</style>
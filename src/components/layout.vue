<template>
  <div class="coForwardlayoutArea">
    <editableBlock v-for="(component, index) in layoutData" :componentName="component" :key="index" />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import editableBlock from '@/components/editableBlock.vue';

  const layoutData=ref([]);
  console.log(layoutData.value);
  const addComponent=function(componentsName){
    layoutData.value.push(componentsName);
    console.log(layoutData.value);
  }
  defineExpose({addComponent});
</script>

<style lang="scss">
  .coForwardlayoutArea{
    width:100%;
    height:500px;
    border:#ccc solid 1px;
    position: relative;
  }
</style>
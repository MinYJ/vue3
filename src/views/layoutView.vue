<template>
  <article>
    <h1>Editable Layout</h1>
    
    <div class="example">
      <h2>사용예시</h2>
      <editableLayout ref="editableLayoutRef"/>
      <div class="testBtnDiv">
        <button @click="addComponent('inquiry')">Add 'test'</button>
        <button @click="addComponent('inputVolume')">Add 'test2'</button>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ref } from 'vue';
import editableLayout from '@/components/layout.vue';

const editableLayoutRef=ref(null);

const addComponent=function(components){
  editableLayoutRef.value.addComponent(components);
}
</script>

<style lang="scss" scoped>

</style>
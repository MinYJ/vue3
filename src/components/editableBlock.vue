<template>
  <Vue3DraggableResizable
    class="editableBlock"
    parent=".coForwardlayoutArea"
    :min-width="componentInfo.minWidth"
    :max-width="componentInfo.maxWidth"
    :min-height="componentInfo.minHeight"
    :max-height="componentInfo.maxHeight"
  >
    <article>
      <header>
        <h1 class="handle">{{ componentInfo.title }}</h1>
        <span>
          <button @click="toggleBody($event)">접기</button>
          <button @click="remove($event)">삭제</button>
        </span>
      </header>
      <div class="body" :style="'min-height:'+componentInfo.height+'px;min-width:'+componentInfo.width+'px;'">
        <blockConent />
      </div>
    </article>
  </Vue3DraggableResizable>
</template>

<script setup>
  import { defineAsyncComponent,ref } from 'vue';
  import editableBlockWrap from 'vue3-draggable-resizable';
  //Vue3DraggableResizable
  import layoutSetting from '@/js/editableLayout.js'
  const props=defineProps({componentName:String});
  const componentName=props.componentName;

  const layout=layoutSetting.layout;
  const componentInfo=layoutSetting.components[componentName];
  let blockConent=ref(null);
  console.log(`@/views/${componentInfo.path}.vue`);
  blockConent=defineAsyncComponent(()=>import(`@/views/${componentInfo.path}.vue`))

</script>

<style lang="scss">
  .editableBlock{
    background-color: #aaa;
    &.active{
      z-index:20;
    }
    header{
      box-sizing: border-box;
      padding: 3px 10px;
      height: 40px;
      border-bottom: #ccc solid 1px;
      background-color: #333;
      display: flex;
      justify-content:space-between;
      align-items: center;
      position: sticky;
      // top: 0;
      // left: 0;
      h1{
        font-size:14px;
        color:white;
        border: #f00 solid 1px;
        cursor: move;
      }
      button{margin:0;}
    }
    >article{
      width:100%;
      height:100%;
      background-color: rgb(224, 196, 196);
      overflow: auto;
      .body {
        width: 100%;
      }
    }
  }
</style>
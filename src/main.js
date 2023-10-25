import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router';
import { createPinia } from 'pinia';

//전역 사용 기능 등록
import jQuery from 'jquery';
window.$ = jQuery;
// window.jjquery = window.$$ = jquery

// draggable-resizeable사용
import Vue3DraggableResizable from 'vue3-draggable-resizable'

// draggable-resizeable사용2
import VueDraggableResizable  from 'vue-draggable-resizable-vue3';

const pinia = createPinia();

createApp(App).use(pinia).use(router).use(Vue3DraggableResizable).mount('#app');
import 'bootstrap/dist/js/bootstrap.js';

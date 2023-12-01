<template>
  <p>{{ tableId }}</p>
  <div :id="tableId" class="coForwardGridTableDiv">
    <div class="scroll_div">
      <transition name="slide-left" :duration="500" appear>
        <table class="coforwardGridTable" v-show="onSetting==false">
          <thead>
            <tr>
              <th v-for="thData in gridData[0]" :key=thData.id :data-id="thData.id">
                <button :data-id="thData.id" @click="sort(thData.id)">
                  {{ thData.label }}
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(trData,index) in gridData" :key="index">
              <td v-for="tdData in trData" :key="tdData.id" :class="tdData.type" :data-id="tdData.id">
                {{ tdData.value }}
              </td>
            </tr>
          </tbody>
        </table>
      </transition>
      <transition name="slide" appear>
        <div class="coforwardGridTableSetting" v-show="onSetting==true">
          <div class="settingList">
            <p>Grid 보기 설정</p>
            <ul @drop="onDrop($event)" @dragover="onDragOver($event)">
              <li draggable="true" @dragstart="onDragstart($event)" @dragover="dragOverItem($event)" 
              v-for="checkData in gridData[0]" :key="checkData.id" :data-id="checkData.id">
                <input type="checkbox" :id="checkData.id+'Check'" :value="checkData.id" checked="checked" @change="display(checkData.id)" />
                <label :for="checkData.id+'Check'">{{ checkData.label }}</label>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
    <button class="btnGridDisplay close" @click="displaySetting()">
      <span v-if="onSetting==false">테이블 설정</span>
      <span v-if="onSetting==true">완료</span>
    </button>
  </div>
</template>

<script setup>
import {onMounted, ref, defineExpose} from 'vue';
import jsonSort from '@/js/jsonSort';


// 상위 컴포넌트에서 데이터 전달 받음
let data=defineProps({gridData:Object, tableId:String});
console.log('data', data);

//테이블용 데이터 반응형으로 지정함
let gridData=ref(data.gridData);
let tableId=data.tableId;
let onSetting = ref(false);


/*
** 테이블 구성 데이터를 변경함(외부에서 사용가능)
*/
const setData=data=>{
  console.log('data');
  console.log(data);
  gridData.value = data;
}

//외부에서 사용 할 수 있는 함수를지정
defineExpose({setData});

// defineProps
// defineEmits
/*
** 특정 테이블 컬럼으로 정렬함(내부용)
*/

const sort = key=>{
  let button=$(`.coforwardGridTable button[data-id=${key}]`);
  let buttonsNot=$(` .coforwardGridTable button:not([data-id=${key}])`);

  buttonsNot.removeClass('desc');
  buttonsNot.removeClass('asc');
  let dir = 'arrayDesc';
  if(button.hasClass('desc')){
    button.removeClass('desc');
    button.addClass('asc');
    dir='arrayAsc';
  } else {
    button.removeClass('asc');
    button.addClass('desc');
    dir='arrayDesc';
  }
  console.log(dir);
  console.log(key);
  jsonSort[dir](gridData.value,key);

}

const display = columnId=>{
  let check = $(`.coforwardGridTableSetting input#${columnId}Check`).is(':checked');
  let column = $(`.coforwardGridTable th[data-id=${columnId}], .coforwardGridTable td[data-id=${columnId}]`);
  console.log('columnId', columnId);
  console.log('check', check);

  if(check){
    column.css({display:''});
  }else{
    column.css({display:'none'});
  }
}

const displaySetting =_=>{
  onSetting.value = !onSetting.value;
}

/*
** Drag 시작 및 dataTransfer 설정 저장
*/
const onDragstart = event=>{
  let dragId = $(event.target).attr('data-id');
  event.currentTarget.classList.add('dragging');
  event.dataTransfer.setData('text/plain', dragId);

}

const onDragOver = event=>{
  // event.preventDefault();
}

const dragOverItem = event=>{
  console.log(`target.tagName_dragOverItem: `, event.target.tagName);
  event.preventDefault();
  $(`.coforwardGridTableSetting li.dropPlaceholder`).removeClass('dropPlaceholder');
  if(event.target.tagName=='LI'){
    $(event.target).addClass('dropPlaceholder');
  } else {
    $(event.target).parent('li').addClass('dropPlaceholder');
  }
}

const onDrop = event =>{
  event.preventDefault();
  const dragId = event.dataTransfer.getData('text/plain');
  $(`.coforwardGridTableSetting li[data-id="${dragId}"]`).insertBefore(`.coforwardGridTableSetting li.dropPlaceholder`);
}

</script>

<style lang="scss" scoped>
  .hidden{display: none;}
  .coforwardGridTableSetting{
    position: absolute;
    left: 0px;
    top: 0px;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.3);
    user-select: none;
    .settingLilst{
      background-color: #ccc;
    }
  }
  .scroll_div{
    border:#00f solid 1px;
    position: relative;
    height: 300px;
    overflow-y: scroll;
    li{
      &.dropPlaceholder{
        margin-top: 15px;
      }
    }
  }
  table{
    width: 100%;
    thead{
      position: sticky;
      top: -1px;
      background: #ccc;
      border: #333 solid 1px;
      z-index: 2;
    }
    th,td{border:#333 solid 1px;}
    th,th{resize: horizontal; overflow:hidden;}
    th[data-id="AnounDte"], td[data-id="AnounDte"]{
      position: sticky;
      left: 0px;
      background-color:#ccc;
      z-index:1;
      border-right:#333 solid 1px;
    }
    th{
      text-align: center;
      resize: horizontal;
      button{
        display: inline-block;
        margin: 0;
        white-space: nowrap;
        &.asc::after{content: " ▲"}
        &.desc::after{content: " ▼"}
      }
    }
  }

  .slide-left-enter-active,
  .slide-left-leave-active{
    transition: all 0.5s ease;
  }

  .slide-left-enter-from{
    opacity:0;
    transform:translateY(-30px);
  }
  .slide-left-leave-to{
    opacity:0;
    transform: translateY(-30px);
  }

  .slide-enter-active,
  .slide-leave-active{
    transition: all 0.5s ease-in-out;
  }

  .slide-enter-from{
    opacity:0;
    transform: translateY(30px);
  }
  .slide-leave-to{
    opacity:0;
    transform:translateY(-30px);
  }
</style>




<!--
1. draggable="true"를 준다
2. dragstart -> dragover -> drop 순으로 실행

2.1 
dragstart 이벤트핸들러에서 setData로 데이터 전달해야함
setData는 키, 값 형식으로 저장

2.2
dragover에게 e.preventDefault();
-->
<template>
  <div>조회테이블 </div>
  <button @click="receive()">환율조회</button>
  <button @click="reset()">리셋</button>
  <div v-if="base.isInquiry.value">  </div>
  <gridTable ref="coForwardGridTableRef" v-bind:grid-data="base.gridData.value"/>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import gridTable from '@/components/gridTable.vue';

const coForwardGridTableRef = ref(null);

const base = {
  tableData: ref([]),
  gridData: ref([]),
  isInquiry: ref(false),
  tableId: ref('coForwardTable'),
  changeComponent(name = 'no_inquiry'){
    if(name == 'inquiry') base.isInquiry.value = true;
    else base.isInquiry.value = false;
  },
  getTableData(resData){
    resData.forEach(item =>{
      base.gridData.value.push(item);
    })
  }
};

const receive = () => {
  const array_value = [
    [{'id': 'AnounDte', 'value': '0911', 'label': "고시일자"}, {'id':'PrdctCd', 'value': 'USDKRW1', 'label':'상품코드'}, {'id': 'TnrPtrn', 'value':'테너유형1', 'label': '테너유형'}, {'id': 'StartTtm', 'value':"230001", 'label':'시작시간'}, {'id': 'EndTtm', 'value': '233001', 'label':'종료시간'}],
    [{'id': 'AnounDte', 'value': '0912', 'label': "고시일자"}, {'id':'PrdctCd', 'value': 'USDKRW2', 'label':'상품코드'}, {'id': 'TnrPtrn', 'value':'0a', 'label': '테너유형'}, {'id': 'StartTtm', 'value':"230002", 'label':'시작시간'}, {'id': 'EndTtm', 'value': '233002', 'label':'종료시간'}],
    [{'id': 'AnounDte', 'value': '0913', 'label': "고시일자"}, {'id':'PrdctCd', 'value': 'USDKRW3', 'label':'상품코드'}, {'id': 'TnrPtrn', 'value':'0b', 'label': '테너유형'}, {'id': 'StartTtm', 'value':"230003", 'label':'시작시간'}, {'id': 'EndTtm', 'value': '233003', 'label':'종료시간'}],
    [{'id': 'AnounDte', 'value': '0914', 'label': "고시일자"}, {'id':'PrdctCd', 'value': 'USDKRW4', 'label':'상품코드'}, {'id': 'TnrPtrn', 'value':'0c', 'label': '테너유형'}, {'id': 'StartTtm', 'value':"230004", 'label':'시작시간'}, {'id': 'EndTtm', 'value': '233004', 'label':'종료시간'}],
    [{'id': 'AnounDte', 'value': '0915', 'label': "고시일자"}, {'id':'PrdctCd', 'value': 'USDKRW5', 'label':'상품코드'}, {'id': 'TnrPtrn', 'value':'0d', 'label': '테너유형'}, {'id': 'StartTtm', 'value':"230005", 'label':'시작시간'}, {'id': 'EndTtm', 'value': '233005', 'label':'종료시간'}],
    [{'id': 'AnounDte', 'value': '0916', 'label': "고시일자"}, {'id':'PrdctCd', 'value': 'USDKRW6', 'label':'상품코드'}, {'id': 'TnrPtrn', 'value':'0e', 'label': '테너유형'}, {'id': 'StartTtm', 'value':"230006", 'label':'시작시간'}, {'id': 'EndTtm', 'value': '233006', 'label':'종료시간'}],
    [{'id': 'AnounDte', 'value': '0917', 'label': "고시일자"}, {'id':'PrdctCd', 'value': 'USDKRW7', 'label':'상품코드'}, {'id': 'TnrPtrn', 'value':'0f', 'label': '테너유형'}, {'id': 'StartTtm', 'value':"230007", 'label':'시작시간'}, {'id': 'EndTtm', 'value': '233007', 'label':'종료시간'}],
    [{'id': 'AnounDte', 'value': '0918', 'label': "고시일자"}, {'id':'PrdctCd', 'value': 'USDKRW8', 'label':'상품코드'}, {'id': 'TnrPtrn', 'value':'0g', 'label': '테너유형'}, {'id': 'StartTtm', 'value':"230008", 'label':'시작시간'}, {'id': 'EndTtm', 'value': '233008', 'label':'종료시간'}],
    [{'id': 'AnounDte', 'value': '0919', 'label': "고시일자"}, {'id':'PrdctCd', 'value': 'USDKRW9', 'label':'상품코드'}, {'id': 'TnrPtrn', 'value':'0h', 'label': '테너유형'}, {'id': 'StartTtm', 'value':"230009", 'label':'시작시간'}, {'id': 'EndTtm', 'value': '233009', 'label':'종료시간'}],
    [{'id': 'AnounDte', 'value': '0920', 'label': "고시일자"}, {'id':'PrdctCd', 'value': 'USDKRW10', 'label':'상품코드'}, {'id': 'TnrPtrn', 'value':'0g', 'label': '테너유형'}, {'id': 'StartTtm', 'value':"230010", 'label':'시작시간'}, {'id': 'EndTtm', 'value': '233010', 'label':'종료시간'}],
  ];

  base.changeComponent('inquiry');
  base.getTableData(array_value);

  /**
   ** 방법1 v-bind:grid-data="base.gridData.value" v-bind:tableId="'inquiry'"
  */

  coForwardGridTableRef.value.setData(base.gridData.value);
}

const reset = () =>{
  base.gridData.value.length = 0;
}
</script>

<style lang="scss" scoped>

</style>
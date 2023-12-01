/**
 *  currencyPair를 위한 저장소
 */

import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCurrencyPairStore = defineStore('CurrencyPair', ()=>{
  const idNumberValue=ref(0);
  let cnt = 0;
  const linker=ref({
    idNumber:idNumberValue,
    data:{}
  });

  const setIdNumber=function(idNumber){
    let newIdNumber=0;
    if(idNumber){
      newIdNumber=idNumber;
    }else{
      let lastIdNumber=0;
      for(const key in linker.value.data){
        lastIdNumber=lastIdNumber+1;
      }
      newIdNumber=lastIdNumber+1;
      linker.value.data[`link${newIdNumber}`]=`연결대기(${newIdNumber})`;
    }
    console.log(`newIdNumber`);
    console.log(newIdNumber);
    linker.value.idNumber=newIdNumber;
  }

  const setValue=function(key,value){
    linker.value.data[key]=value;
  }

  const resetIdNumber=function(){
    linker.value.idNumber=0;
  }

  const deleteLinkData=function(key){
    delete linker.value.data[key]
  }

  const addCnt=function(){
    cnt=cnt+1;
    return cnt;
  }

  return {linker, setIdNumber, setValue, resetIdNumber, deleteLinkData, addCnt};
});
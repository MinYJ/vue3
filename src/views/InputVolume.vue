<template>
  <div>
    <label for="id"></label>
    <input type="text"
      :value="inputValue"
      @input="inputValue = $event.target.value"

      placeholder="수량을 입력하세요"
      @keyup="keyup($event)"
      @focus="onFocus($event)"
      @change="fireEmit(`change`)"
    />
  </div>
</template>

<script setup>
/*
      :value="inputValue"
      @input="inputValue = $event.target.value"
*/
import {ref} from 'vue';
import currencyFormat from '@/js/currencyFormat.js';

let inputValue = ref();
let decimalPlaces = ref(2);
let tranjactionCurrency=ref('KRW');

let min=false;
let max=false;

const keyup = (event)=>{
  //입력값을 숫자형으로 변환
  let valueTemp=inputValue.value;
  let numberArray=[];
  let isDecimal=false;
  let decimalCnt=0;
  const allowKey=['0','1','2','3','4','5','6','7','8','9'];
  const allowNumber=['0','1','2','3','4','5','6','7','8','9','.'];
  let tempArray=valueTemp.split('');


  for(const num of tempArray){
    if(!validation.isAllowNumber(allowNumber, num)) continue;
    
    
    if(validation.isDot(num)) {
      if(validation.checkDotCondition(decimalPlaces, isDecimal)){
        numberArray.push(num);
        isDecimal = true;
      }
    } else {
      if(validation.checkCondition(decimalPlaces, isDecimal)) decimalCnt=decimalCnt+1;
      numberArray.push(num);
    }
  }

  let numberValue=numberArray.join('');
  console.log('numberValue: ', numberValue);

  if(event.key=='.'){
    if(decimalPlaces.value>0) return false;
  }

  if(event.key=='k' || event.key=='K'){
    numberValue=numberValue*1000;
  } else {
    if(event.key=='m' || event.key=='M'){
      numberValue=numberValue*1000000;
    }
  }

  let fractionDigitsValue = 0;

  console.log(`decimalPlaces.value: `, decimalPlaces.value);
  console.log(`decimalCnt: `, decimalCnt);
  if(isDecimal){
    if(decimalCnt<=decimalPlaces.value){
      fractionDigitsValue=decimalCnt;
    }else{
      console.log(`decimalCnt2222222222: `, decimalCnt);
      fractionDigitsValue=decimalPlaces.value;
      console.log(`fractionDigitsValue: `, fractionDigitsValue);
    }
  }
  let formatOption={
    style:'decimal', /* 통화값 표시 방법 : currency(통화) / decimal(십진수) / percent(퍼센트) */
    minimumFractionDigits:fractionDigitsValue, /* 최소 소수점 자리 표시수 */
    maximumFractionDigits:fractionDigitsValue, /* 최대 소수점 자리 표시수 */
    lang:'ko-KR' /* 표시 언어 - 기본값 한국어 */
  }
  if(numberValue==0){
    inputValue.value='';
  }else{
    inputValue.value=currencyFormat[tranjactionCurrency.value](numberValue,formatOption);
  }
}

const validation = {
  isAllowNumber(allowNumber, num){
    return allowNumber.includes(num);
  },
  isDot(num) {
    return num.includes('.');
  },
  checkDotCondition(decimalPlaces, isDeciaml){
    if(decimalPlaces.value > 0) {
      if(!isDeciaml){
        return true;
      }
    }
  },
  checkCondition(decimalPlaces, isDeciaml){
    if(isDeciaml) {
      if(decimalPlaces.value>0) {
        return true;
      }
    }
  }
}
const onFocus = (event)=>{
  event.target.select();
}

const fireEmit = (type)=>{
  let valueTemp = inputValue.value;
  let tempArray = valueTemp.split('');
  const allowNumber = ['0','1','2','3','4','5','6','7','8','9','.'];
  let numberArray = [];
  tempArray.forEach(num =>{
    if(allowNumber.includes(num)){
      numberArray.push(num);
    }
  })
  let numberValue = numberArray.join('');
  let valueState = 'adhere';
  if(type == 'change') {
    if(min!==false&&numberValue<min){
      numberValue=min;
      valueState='minValue';
    }
    if(max!==false&&numberValue>max){
      numberValue=max;
      valueState='maxValue';
    }

    let formatOption={
      style:'decimal',
      minimumFractionDigits:decimalPlaces.value,
      maximumFractionDigits:decimalPlaces.value,
      lang:`ko-KR`
    }
    inputValue.value = currencyFormat[tranjactionCurrency.value](numberValue,formatOption);
  }
}
</script>

<style lang="scss" scoped>

</style>


<!--

  //한글입력방지
  let valueTemp = inputValue.value;
  const alphabet = /[^0-9KM.]/g;
  if(alphabet.test(inputValue.value)){
    inputValue.value=inputValue.value.replaceAll(alphabet, '');
  }
-->
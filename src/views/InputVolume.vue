<template>
  <div>
    <label for="id"></label>
    <input type="text"
      :value="inputValue"
      @input="inputValue = $event.target.value"
      placeholder="수량을 입력하세요"
      @keyup="keyup($event)"
      @focus=onFocus($event);
    />
  </div>
</template>

<script setup>
import {ref} from 'vue';
import currencyFormat from '@/js/currencyFormat.js';

let inputValue = ref();
let decimalPlaces = ref(2);

const keyup = (event)=>{
  //입력값을 숫자형으로 변환
  let valueTemp=inputValue.value;
  let numberArray=[];
  let isDecimal=false;
  let decimalCnt=0;
  let tranjactionCurrency=ref('KRW');
  const allowKey=['0','1','2','3','4','5','6','7','8','9'];
  const allowNumber=['0','1','2','3','4','5','6','7','8','9','.'];
  let tempArray=valueTemp.split('');
  tempArray.forEach(num => {
    if(allowNumber.includes(num)){
      if(num=='.'){
        if(decimalPlaces.value > 0) {
          if(!isDecimal){
            numberArray.push(num);
            isDecimal=true;
          }
        }
      } else{
        if(isDecimal){
          if(decimalPlaces.value>0){
            decimalCnt=decimalCnt+1;
            numberArray.push(num);
          }
        } else{
          numberArray.push(num);
        }
      }
    };
  });

  let numberValue=numberArray.join('');
  console.log('numberValue: ', numberValue);

  if(event.key=='.'){
    inputValue.value = numberValue;
    return false;
    // if(decimalPlaces.value>0){return false;}
  }

  //한글입력방지
  const alphabet = /[ㄱ-ㅎ]/g;
  if(alphabet.test(inputValue.value)){
    inputValue.value=numberValue;
    return false;
  }

  if(event.key=='k' || event.key=='K'){
    numberValue=numberValue*1000;
  } else {
    if(event.key=='m' || event.key=='M'){
      numberValue=numberValue*1000000;
    }
  }

  inputValue.value = numberValue;

  let fractionDigitsValue = 0;
  if(isDecimal){
    if(decimalCnt<=decimalPlaces.value){
      fractionDigitsValue=decimalCnt;
    }else{
      fractionDigitsValue=decimalPlaces.value;
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

const onFocus = (event)=>{
  event.target.select();
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
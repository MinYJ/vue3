<template>
	<h2>CurrencyPair View</h2>

  <div class="inputField currencyPair" :data-linkNumber="linkIdNumber">
    <input type="text"
      placeholder="통화쌍을 선택하세요"
      :value="inputValue"
      :list="datalistId"
      @change="valueChange($event)"
      @focus="onFocus($event)"
    />
    <datalist :id="datalistId">
      <option v-for="(item, index) in currencyItems" :key="index">{{ item }}</option>
    </datalist>

    <button class="btnSetting" @click="setting($event)">
      {{ btnSettingText }}
    </button>

    <div class="linkBtnDiv">
      <button class="btnLinkTo" @click="linkTo($event)">연결</button>
      <button class="btnUnlink" @click="unlink($event)">연결해제</button>
      <button class="btnLink" @click="link($event)">연결대기</button>
    </div>

    <div class="testDiv">
        <p>{{ currencyPairStore.linker }}</p>
        <p>{{ linkedValue }}</p>
        <p></p>
    </div>
  </div>
</template>

<script setup>
    import { ref, computed, onBeforeMount, watch } from 'vue';
    import { userDataStore } from '@/store/store';
    import { useCurrencyPairStore } from "@/store/currencyPair";

    const afterLoginStore = userDataStore();
    const afterLoginData = computed(_=>afterLoginStore.store).value;
    const currencyItems = afterLoginData.crncy;

    const currencyPairStore = useCurrencyPairStore();
    const emit = defineEmits('changeCurrency');

    let inputValue='';
    let btnSettingText = '설정';
    let linkIdNumber = ref(0);

    //데이터 리스트 Id 생성
    let datalistId= '';
    onBeforeMount(()=>{
        const idNumber = currencyPairStore.addCnt();
        datalistId='currencyDatalist'+idNumber;
    });

    /**
     ** currencyPairStore.linker.data 변경감지
     */
    watch(currencyPairStore.linker.data, async(newValue, oldValue) =>{
        console.log('>>>> currencyPairStore.linker.data: ', newValue, oldValue);
        const linkIdNumberTemp=getLinkIdNumber();
        if(linkIdNumberTemp<1){
            return false;
        }
        const key='link'+linkIdNumberTemp;
        const emitData={
            linkId:linkIdNumberTemp,
            value:currencyPairStore.linker.data[key]
        }
        fireEmit(emitData);
    })

    /*
    ** 연결된 입력값 계산
    */
    let linkedValue = computed(()=>{
        const linkIdNumberTemp = getLinkIdNumber();
        if(linkIdNumberTemp<1){
            return false;
        }
        const key='link'+linkIdNumberTemp;
        const emitData={
            linkId:linkIdNumberTemp,
            value:currencyPairStore.linker.data[key]
        }
        return currencyPairStore.linker.data[key];
    })

    /*
    ** 링크 ID의 반환
    */
    function getLinkIdNumber(){
        return linkIdNumber.value;
    }

    let data=defineProps({option:Object});

    if(typeof(data.option) == 'object'){
        if(data.option.hasOwnProperty('value')){
            const optionValue = data.option.value;
            const optionLinkId = data.option.linkId;
            inputValue=optionValue;
            if(optionLinkId){
                console.log('링크설정 후 저장소 셋팅');
                const key = 'link' + optionLinkId;
                currencyPairStore.setValue(key, optionValue);
                linkIdNumber.value = optionLinkId;
                inputValue = linkedValue;
            } else {
                const emitData = {
                    linkId:false,
                    value:optionValue
                }
                fireEmit(emitData);
            }
        }
    }

    const fireEmit = emitData =>{
        const check=checkCurrencyPare(emitData.value);
        console.log(check);
        if(check){
            emit('changeCurrency',emitData);
        }
    }

    const onFocus = (event)=>{
        event.target.select()
    }

    const valueChange = (event) => {
        console.log(event.target);
        console.log(event.target.value);
    }

    const setting = event=>{
        let btn = $(event.target);
        let div = btn.parents(".currencyPair");
        div.addClass('setting');
        const isLinked = div.attr('data-linkNumber');
        //입력값 저장
        const inputValueBackup = div.find('input').val();
        $('.currencyPair:not(.setting) .btnSetting').slideUp(300);

        //링크 설정이 열린상태
        if(btn.hasClass('open')){
            console.log('열린상태');
            btn.removeClass('open');
            btnSettingText= '설정';
            btn.attr('title','링크 설정을 완료합니다.');
            div.removeClass('setting');
            div.removeClass('linkFrom');
            $('.currencyPair .btnSetting').slideDown(0);
            $('.currencyPair .linkBtnDiv button').slideUp(300);

            //링크작동 처리
            const readyLink=$('.currencyPair.readyLink');
            if(readyLink.length>0){
                linkIdNumber.value=currencyPairStore.linker.idNumber;
                inputValue = linkedValue;
                currencyPairStore.resetIdNumber();
                const key = `link${linkIdNumber.value}`;
                currencyPairStore.setValue(key,inputValueBackup);
            }
            //임시데이터 삭제
            readyLink.removeClass('readyLink');
            $('.currencyPair').removeAttr('data-backupValue');
            $('.currencyPair .btnLink').removeClass('ready').text('연결대기');
        } else {
            console.log('닫힌상태');
            btn.addClass('open');
            btnSettingText= '완료';
            btn.attr('title','링크 설정을 합니다.');
            div.find('.btnLinkTo').slideDown(300);
        }
    }

    const linkTo = event => {
        // //연결대기 상태 확인
        const checkReadyLink = $('div.currencyPair.linkFrom');
        if(checkReadyLink.length>0){return false;}

        // //링크 출발지 기록
        let btn = $(event.target);
        let div = btn.parents('.currencyPair');
        div.addClass('linkFrom');

        const inputValueBackup = div.find('input').val();
        const checkLinkIdNumber = div.attr('data-linknumber');
        console.log('checkLinkIdNumber');
        console.log(checkLinkIdNumber);
        let selector='';
        if(checkLinkIdNumber>0){
            currencyPairStore.setIdNumber(checkLinkIdNumber);
            selector=`[data-linknumber!="${checkLinkIdNumber}"]`;
            console.log('selector');
            console.log(selector);
        }else{
            currencyPairStore.setIdNumber();
        }

        let targetDivs = $(`.currencyPair:not(.linkFrom)`);
        console.log('targetDivs');
        console.log(targetDivs);
        targetDivs.find('.btnSetting').slideUp(0);
        targetDivs.find('.btnLink').slideDown(300);
    }

    const unlink = event =>{
        const btn=$(event.target);
        const div=btn.parents('.currencyPair');
        const inputValueBackup=div.find('input').val();
        const delLinkId=div.attr('data-linknumber');
        linkIdNumber.value=0;
        inputValue=inputValueBackup;

        const checkLinkCnt=$(`div.currencyPair[data-linknumber="${delLinkId}"]`).length;
        if(checkLinkCnt==1){
            const key='link'+delLinkId;
            currencyPairStore.deleteLinkData(key);
        }
    }

    const link = event => {
        const btn = $(event.target);
        const div = btn.parents('.currencyPair');
        //연결대기상태
        if(btn.hasClass('ready')){
            btn.removeClass('ready');
            btn.text('연결대기');
            div.removeClass('readyLink');
            const backupInputValue = div.attr('data-backupValue');

            linkIdNumber.value = 0;
            inputValue=backupInputValue;
        }else{
            btn.addClass('ready');
            btn.text('연결취소');
            div.addClass('readyLink');

            const backupInputValue = div.find('input').val();
            console.log('backupInputValue');
            console.log(backupInputValue);
            // div.attr('data-backupValue', backupInputValue);

            // linkIdNumber.value = currencyPairStore.linker.idNumber;
            // const key="link"+linkIdNumber.value;
            // // inputValue=linkedValue;
        }
    }
</script>

<style lang="scss" scoped>
    .currencyPair{
        display: flex;
        margin-bottom: 10px;
        .linkBtnDiv{
            margin-right: 10px;
            display: flex;
            gap: 5px;
            button {
                display: none;
            }
        }
    }
</style>


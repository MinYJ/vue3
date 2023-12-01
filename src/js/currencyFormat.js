const currencyFormat={
  option:{
    style:'currency', /* 통화값 표시 방법 : currency (통화) / decimal(십진수) / percent(퍼센트) */
    currencyDisplay:'code', /* 통화 이름표시 방법 : symbol (통화기호) / code (ISO코드) / name(이름) */
    minimumFractionDigits:0, /* 소수점 자리 표시수 */
    maximumFractionDigits:2, /* 소수점 자리 표시수 */
    lang:'ko-KR' /*표시 언어 - 기본값 한국어 */
  },

  make_format:function(number,setOption,currency){
    let thisOption={}
    if(setOption){
      thisOption.style=(Object.keys(setOption).includes('style'))?setOption.style:this.option.style;
      thisOption.currencyDisplay=(Object.keys(setOption).includes('currencyDisplay'))?setOption.currencyDisplay:this.option.currencyDisplay;
      thisOption.minimumFractionDigits=(Object.keys(setOption).includes('minimumFractionDigits'))?setOption.maximumFractionDigits:this.option.maximumFractionDigits;
      thisOption.maximumFractionDigits=(Object.keys(setOption).includes('maximumFractionDigits'))?setOption.maximumFractionDigits:this.option.maximumFractionDigits;
      thisOption.lang=(Object.keys(setOption).includes('lang'))?setOption.lang:this.option.lang;
    } else {
      thisOption=this.option;
    }
    thisOption.currency=currency;
    const formatOption={
      style: thisOption.style,
      currency: thisOption.currency,
      currencyDisplay:thisOption.currencyDisplay,
      minimumFractionDigits:thisOption.minimumFractionDigits,
      maximumFractionDigits:thisOption.maximumFractionDigits
    }
    return new Intl.NumberFormat(thisOption.lang, formatOption).format(number);
  },

  AED:function(number,set_option){return this.make_format(number,set_option,'AED')}, /* 아랍에미리트 디르함: 아랍에미리트 */
  AFN:function(number,set_option){return this.make_format(number,set_option,'AFN')}, /* 아프가니스탄 아프가니: 아프가니스탄 */
  ALL:function(number,set_option){return this.make_format(number,set_option,'ALL')}, /* 알바니아 레크: 알바니아 */
  AMD:function(number,set_option){return this.make_format(number,set_option,'AMD')}, /* 아르메니아 드람: 아르메니아 */
  ANG:function(number,set_option){return this.make_format(number,set_option,'ANG')}, /* 네덜란드령 안틸레스 휠던: 퀴라소 (CW), 신트마르턴 (SX)*/
  AOA:function(number,set_option){return this.make_format(number,set_option,'AOA')}, /* 앙골라 콴자: 앙골라 */
  ARS:function(number,set_option){return this.make_format(number,set_option,'ARS')}, /* 아르헨티나 페소: 아르헨티나 */
  AUD:function(number,set_option){return this.make_format(number,set_option,'AUD')}, /* 오스트레일리아 달러: 오스트레일리아 */
  AWG:function(number,set_option){return this.make_format(number,set_option,'AWG')}, /* 아루바 플로린 : 아루바*/
  AZN:function(number,set_option){return this.make_format(number,set_option,'AZN')}, /* 아제르바이잔 마나트: 아제르바이잔 */
  BAM:function(number,set_option){return this.make_format(number,set_option,'BAM')}, /* 보스니아 */
  BBD:function(number,set_option){return this.make_format(number,set_option,'BBD')}, /* 바베이도스 달러 */
  BDT:function(number,set_option){return this.make_format(number,set_option,'BDT')}, /* 방글라데시 타카 */
  BGN:function(number,set_option){return this.make_format(number,set_option,'BGN')}, /* 불가리아 레프 */
  BHD:function(number,set_option){return this.make_format(number,set_option,'BHD')}, /* 바레인 디나르 */
  BIF:function(number,set_option){return this.make_format(number,set_option,'BIF')}, /* 부룬디 프랑 */
  BMD:function(number,set_option){return this.make_format(number,set_option,'BMD')}, /* 버뮤다 달러 */
  BND:function(number,set_option){return this.make_format(number,set_option,'BND')}, /* 브루나이 달러  */
  BOB:function(number,set_option){return this.make_format(number,set_option,'BOB')}, /* 볼리비아 볼리비아노 */
  BOV:function(number,set_option){return this.make_format(number,set_option,'BOV')}, /* */
  BRL:function(number,set_option){return this.make_format(number,set_option,'BRL')}, /* 브라질 헤알 */
  BSD:function(number,set_option){return this.make_format(number,set_option,'BSD')}, /* 바하마 달러 */
  BTN:function(number,set_option){return this.make_format(number,set_option,'BTN')}, /* 부탄 눌트럼 */
  BWP:function(number,set_option){return this.make_format(number,set_option,'BWP')}, /* 보츠와나 풀라 */
  BYN:function(number,set_option){return this.make_format(number,set_option,'BYN')}, /* 신 벨라루스 루블 */
  BYR:function(number,set_option){return this.make_format(number,set_option,'BYR')}, /* 벨라루스 루블 */
  BZD:function(number,set_option){return this.make_format(number,set_option,'BZD')}, /* 벨리즈 달러 */
  CAD:function(number,set_option){return this.make_format(number,set_option,'CAD')}, /* 캐나다 달러 */
  CDF:function(number,set_option){return this.make_format(number,set_option,'CDF')}, /* 콩고 프랑*/
  CHE:function(number,set_option){return this.make_format(number,set_option,'CHE')}, /* WIR 유로 : 스위스 */
  CHF:function(number,set_option){return this.make_format(number,set_option,'CHF')}, /* 스위스 프랑 */
  CHW:function(number,set_option){return this.make_format(number,set_option,'CHW')}, /* WIR 프랑*/
  CLF:function(number,set_option){return this.make_format(number,set_option,'CLF')}, /* 칠레*/
  CLP:function(number,set_option){return this.make_format(number,set_option,'CLP')}, /* 칠레 페소: 칠레*/
  CNY:function(number,set_option){return this.make_format(number,set_option,'CNY')}, /* 중화인민공화국 위안*/
  COP:function(number,set_option){return this.make_format(number,set_option,'COP')}, /* 콜림비아 페소 */
  COU:function(number,set_option){return this.make_format(number,set_option,'COU')}, /* 콜롬비아 기금부호*/
  CRC:function(number,set_option){return this.make_format(number,set_option,'CRC')}, /* 코스타리카 콜론 */
  CUC:function(number,set_option){return this.make_format(number,set_option,'CUC')}, /* 쿠바 태환 페소 */
  CUP:function(number,set_option){return this.make_format(number,set_option,'CUP')}, /* 쿠바 페소 */
  CVE:function(number,set_option){return this.make_format(number,set_option,'CVE')}, /* 카보베르데*/
  CZK:function(number,set_option){return this.make_format(number,set_option,'CZK')}, /* 체코 */
  DJF:function(number,set_option){return this.make_format(number,set_option,'DJF')}, /* 지부티 프랑 */
  DKK:function(number,set_option){return this.make_format(number,set_option,'DKK')}, /* 덴마크 크로네 */
  DOP:function(number,set_option){return this.make_format(number,set_option,'DOP')}, /* 도미니카 페소 */
  DZD:function(number,set_option){return this.make_format(number,set_option,'DZD')}, /* 알제리 */
  EGP:function(number,set_option){return this.make_format(number,set_option,'EGP')}, /* 이집트 파운드 */
  ERN:function(number,set_option){return this.make_format(number,set_option,'ERN')}, /* 에리트레아 낙파 */
  ETB:function(number,set_option){return this.make_format(number,set_option,'ETB')}, /* 에티오피아 비르 */
  EUR:function(number,set_option){return this.make_format(number,set_option,'EUR')}, /* 유로 */
  FJD:function(number,set_option){return this.make_format(number,set_option,'FJD')}, /* 피지 달러 */
  GBP:function(number,set_option){return this.make_format(number,set_option,'GBP')}, /* 파운드 스털링 */
  FKP:function(number,set_option){return this.make_format(number,set_option,'FKP')}, /* 포클랜드 제도 */
  GEL:function(number,set_option){return this.make_format(number,set_option,'GEL')}, /* 조지아 라리 */
  GHS:function(number,set_option){return this.make_format(number,set_option,'GHS')}, /* 가나 세디 */
  GIP:function(number,set_option){return this.make_format(number,set_option,'GIP')}, /* 지브롤터 파운드 */
  GMD:function(number,set_option){return this.make_format(number,set_option,'GMD')}, /* 감비아 달라시 */
  GNF:function(number,set_option){return this.make_format(number,set_option,'GNF')}, /* 기니 프랑 */
  GTQ:function(number,set_option){return this.make_format(number,set_option,'GTQ')}, /* 과테말라 케찰 */
  GYD:function(number,set_option){return this.make_format(number,set_option,'GYD')}, /* 가이아나 달러 */
  HKD:function(number,set_option){return this.make_format(number,set_option,'HKD')}, /* 홍콩달러 */
  HNL:function(number,set_option){return this.make_format(number,set_option,'HNL')}, /* 온두라스 렘피라 */
  HRK:function(number,set_option){return this.make_format(number,set_option,'HRK')}, /* 크로아티아 쿠나 */
  HTG:function(number,set_option){return this.make_format(number,set_option,'HTG')}, /* 아이티 구르드 */
  HUF:function(number,set_option){return this.make_format(number,set_option,'HUF')}, /* 헝가리 포린트 */
  IDR:function(number,set_option){return this.make_format(number,set_option,'IDR')}, /* 인도네시아 루피아 */
  ILS:function(number,set_option){return this.make_format(number,set_option,'ILS')}, /* 이스라엘 신 셰켈 */
  INR:function(number,set_option){return this.make_format(number,set_option,'INR')}, /* 인도 루피 */
  IQD:function(number,set_option){return this.make_format(number,set_option,'IQD')}, /* 이라크 디나르*/
  IRR:function(number,set_option){return this.make_format(number,set_option,'IRR')}, /* 이란 리알*/
  ISK:function(number,set_option){return this.make_format(number,set_option,'ISK')}, /* 아이슬란드 크로나 */
  JMD:function(number,set_option){return this.make_format(number,set_option,'JMD')}, /* 자메이카 달러 */
  JOD:function(number,set_option){return this.make_format(number,set_option,'JOD')}, /* 요르단 디나르 */
  JPY:function(number,set_option){return this.make_format(number,set_option,'JPY')}, /* 일본 엔 */
  KES:function(number,set_option){return this.make_format(number,set_option,'KES')}, /* 케냐 실링 */
  KGS:function(number,set_option){return this.make_format(number,set_option,'KGS')}, /* 키르기스스탄 솜 */
  KHR:function(number,set_option){return this.make_format(number,set_option,'KHR')}, /* 캄보디아 리엘 */
  KMF:function(number,set_option){return this.make_format(number,set_option,'KMF')}, /* 코모로 프랑 */
  KPW:function(number,set_option){return this.make_format(number,set_option,'KPW')}, /* 북한 */
  KRW:function(number,set_option){return this.make_format(number,set_option,'KRW')}, /* 대한민국 */
  KWD:function(number,set_option){return this.make_format(number,set_option,'KWD')}, /* 쿠에이트 */
  KYD:function(number,set_option){return this.make_format(number,set_option,'KYD')}, /* 케이맨*/
  KZT:function(number,set_option){return this.make_format(number,set_option,'KZT')}, /* 카자흐스탄 */
  LAK:function(number,set_option){return this.make_format(number,set_option,'LAK')}, /* 라오스 킵 */
  LBP:function(number,set_option){return this.make_format(number,set_option,'LBP')}, /* 레바논 파운드 */
  LKR:function(number,set_option){return this.make_format(number,set_option,'LKR')}, /* 스리랑카 루피 */
  LRD:function(number,set_option){return this.make_format(number,set_option,'LRD')}, /* 라이베리아 달러 */
  LSL:function(number,set_option){return this.make_format(number,set_option,'LSL')}, /* 레소토 로티 */
  LYD:function(number,set_option){return this.make_format(number,set_option,'LYD')}, /* 리비아 디나르 */
  MAD:function(number,set_option){return this.make_format(number,set_option,'MAD')}, /* 모나코 디르함 */
  MDL:function(number,set_option){return this.make_format(number,set_option,'MDL')}, /* 몰도바 레우 */
  MGA:function(number,set_option){return this.make_format(number,set_option,'MGA')}, /* 마다가스카르 */
  MKD:function(number,set_option){return this.make_format(number,set_option,'MKD')}, /* 마케도니아 */
  MMK:function(number,set_option){return this.make_format(number,set_option,'MMK')}, /* 미얀마 */
  MNT:function(number,set_option){return this.make_format(number,set_option,'MNT')}, /* 몽골*/
  MOP:function(number,set_option){return this.make_format(number,set_option,'MOP')}, /* 파타카 */
  MRO:function(number,set_option){return this.make_format(number,set_option,'MRO')}, /* 모리타니 */
  MUR:function(number,set_option){return this.make_format(number,set_option,'MUR')}, /* 모리셔스 */
  MVR:function(number,set_option){return this.make_format(number,set_option,'MVR')}, /* 몰디브 */
  MWK:function(number,set_option){return this.make_format(number,set_option,'MWK')}, /* 말라위 */
  MXN:function(number,set_option){return this.make_format(number,set_option,'MXN')}, /* 멕시코 */
  MXV:function(number,set_option){return this.make_format(number,set_option,'MXV')}, /* 멕시코 기금부호 */
  MYR:function(number,set_option){return this.make_format(number,set_option,'MYR')}, /* 말레이시아 링깃 */
  MZN:function(number,set_option){return this.make_format(number,set_option,'MZN')}, /* 모잠비크 */
  NAD:function(number,set_option){return this.make_format(number,set_option,'NAD')}, /* 나미비아 */
  NGN:function(number,set_option){return this.make_format(number,set_option,'NGN')}, /* 나이지리아 */
  NIO:function(number,set_option){return this.make_format(number,set_option,'NIO')}, /* 니카라과  */
  NOK:function(number,set_option){return this.make_format(number,set_option,'NOK')}, /* 노르웨이 */
  NPR:function(number,set_option){return this.make_format(number,set_option,'NPR')}, /* 네팔 루피 */
  NZD:function(number,set_option){return this.make_format(number,set_option,'NZD')}, /* 뉴질랜드 달러 */
  OMR:function(number,set_option){return this.make_format(number,set_option,'OMR')}, /* 오만 리알 */
  PAB:function(number,set_option){return this.make_format(number,set_option,'PAB')}, /* 파나마 발보아  */
  PEN:function(number,set_option){return this.make_format(number,set_option,'PEN')}, /* 페루 솔 */
  PGK:function(number,set_option){return this.make_format(number,set_option,'PGK')}, /* 파푸아뉴기니 */
  PHP:function(number,set_option){return this.make_format(number,set_option,'PHP')}, /* 페루 솔 */
  PKR:function(number,set_option){return this.make_format(number,set_option,'PKR')}, /* 파푸아뉴기니 */
  PLN:function(number,set_option){return this.make_format(number,set_option,'PLN')}, /* 필리핀 페소 */
  PYG:function(number,set_option){return this.make_format(number,set_option,'PYG')}, /* 파키스탄 루피 */
  QAR:function(number,set_option){return this.make_format(number,set_option,'QAR')}, /* 폴란드 즈워티 */
  RON:function(number,set_option){return this.make_format(number,set_option,'RON')}, /* 파라과이 과라니 */
  RSD:function(number,set_option){return this.make_format(number,set_option,'RSD')}, /* 카타르 리얄 */
  RUB:function(number,set_option){return this.make_format(number,set_option,'RUB')}, /* 루마니아 레우 */
  RWF:function(number,set_option){return this.make_format(number,set_option,'RWF')}, /* 세르비아 디나르 */
  SAR:function(number,set_option){return this.make_format(number,set_option,'SAR')}, /* 러시아 루블 */
  SBD:function(number,set_option){return this.make_format(number,set_option,'SBD')}, /* 르완다 프랑 */
  SCR:function(number,set_option){return this.make_format(number,set_option,'SCR')}, /* 사우디아라비아 */
  SDG:function(number,set_option){return this.make_format(number,set_option,'SDG')}, /* 솔로몬 제도 달러 */
  SEK:function(number,set_option){return this.make_format(number,set_option,'SEK')}, /* 세이셸 루피 */
  SGD:function(number,set_option){return this.make_format(number,set_option,'SGD')}, /* 수단 파운드 */
  SHP:function(number,set_option){return this.make_format(number,set_option,'SHP')}, /* 스웨덴 */
  SLL:function(number,set_option){return this.make_format(number,set_option,'SLL')}, /* 싱가포르 */
  SOS:function(number,set_option){return this.make_format(number,set_option,'SOS')}, /* 세인트헬레나 */
  SRD:function(number,set_option){return this.make_format(number,set_option,'SRD')}, /* 시에라리온 */
  SSP:function(number,set_option){return this.make_format(number,set_option,'SSP')}, /* 수리남 */
  STD:function(number,set_option){return this.make_format(number,set_option,'STD')}, /* 남수단 */
  SVC:function(number,set_option){return this.make_format(number,set_option,'SVC')}, /* 상투메 */
  SYP:function(number,set_option){return this.make_format(number,set_option,'SYP')}, /* 엘살바도르 */
  SZL:function(number,set_option){return this.make_format(number,set_option,'SZL')}, /* 시리아 */
  THB:function(number,set_option){return this.make_format(number,set_option,'THB')}, /* 에스와티니 */
  USD:function(number,set_option){return this.make_format(number,set_option,'USD')}, /* 태국 바트 */
  USN:function(number,set_option){return this.make_format(number,set_option,'USN')}, /* 타지키스탄 소모니 */
  UYI:function(number,set_option){return this.make_format(number,set_option,'UYI')}, /* 투르크메니스탄 */
  UYU:function(number,set_option){return this.make_format(number,set_option,'UYU')}, /* 튀니지 */
  UZS:function(number,set_option){return this.make_format(number,set_option,'UZS')}, /* 통가 */
  VEF:function(number,set_option){return this.make_format(number,set_option,'VEF')}, /* 터키 리라 */
  VUD:function(number,set_option){return this.make_format(number,set_option,'VUD')}, /* 트리니다드 */
  VUV:function(number,set_option){return this.make_format(number,set_option,'VUV')}, /* 바누아투 바투*/
  WST:function(number,set_option){return this.make_format(number,set_option,'WST')}, /* 사모아 탈라 */
  XAF:function(number,set_option){return this.make_format(number,set_option,'XAF')}, /*  */
  XAG:function(number,set_option){return this.make_format(number,set_option,'XAG')}, /* 금 */
  XAU:function(number,set_option){return this.make_format(number,set_option,'XAU')}, /* 은 */
  XBA:function(number,set_option){return this.make_format(number,set_option,'XBA')}, /* 채권시장 */
  XBB:function(number,set_option){return this.make_format(number,set_option,'XBB')}, /*  */
  XBC:function(number,set_option){return this.make_format(number,set_option,'XBC')}, /* */
  XBD:function(number,set_option){return this.make_format(number,set_option,'XBD')}, /* */
  XCD:function(number,set_option){return this.make_format(number,set_option,'XCD')}, /* 동카리브 달러 */
  XDR:function(number,set_option){return this.make_format(number,set_option,'XDR')}, /* 특별인출권  */
  XOF:function(number,set_option){return this.make_format(number,set_option,'XOF')}, /* CFA 프랑 */
  XPD:function(number,set_option){return this.make_format(number,set_option,'XOF')}, /* 팔라듐 */
  XPF:function(number,set_option){return this.make_format(number,set_option,'XPF')}, /* CFP 프랑 */
  XPT:function(number,set_option){return this.make_format(number,set_option,'XPT')}, /* 백금 */
  XSU:function(number,set_option){return this.make_format(number,set_option,'XSU')}, /* SUCRE */
  XTS:function(number,set_option){return this.make_format(number,set_option,'XTS')}, /* */
  XUA:function(number,set_option){return this.make_format(number,set_option,'XUA')}, /* 아프리카 개발 은행 */
  XXX:function(number,set_option){return this.make_format(number,set_option,'XXX')}, /* 통화없음 */
  YER:function(number,set_option){return this.make_format(number,set_option,'YER')}, /* 예멘 */
  ZAR:function(number,set_option){return this.make_format(number,set_option,'ZAR')}, /* 남아프리카 공화국 랜드 */
  ZMW:function(number,set_option){return this.make_format(number,set_option,'ZMW')}, /* 잠비아 콰차 */
  ZWL:function(number,set_option){return this.make_format(number,set_option,'ZWL')}, /* 짐바브웨 달러 */
}

export default currencyFormat;
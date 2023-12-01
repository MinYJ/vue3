function getDate(mark) {
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth()+1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  if(mark) return `${y}${mark}${m}${mark}${d}`;
  else return `${y}${m}${d}`;
}

function getTodayToNext(mark, day) {
  const today = new Date();
  today.setDate(today.getDate() + parseInt(day));

  const year = today.getFullYear();
  const month = ('0' + (today.getMonth()+1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);

  if(mark) return `${y}${gubun}${m}${gubun}${d}`;
  else return `${y}${m}${d}`;
}

function getTodayToPrev(mark, baseDay, day) {
  const today = new Date();
  today.setDate(today.getDate() + parseInt(day));

  const year = today.getFullYear();
  const month = ('0' + (today.getMonth()+1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);

  if(mark) return `${y}${gubun}${m}${gubun}${d}`;
  else return `${y}${m}${d}`;
}

function getDateDiff(d1, d2) {
  const date1 = new Date(d1);
  const date2 = new Date(d2);

  const diffDate = date1.getTime() - date2.getTime();
  return Math.abs(diffDate / (1000*60*60*24)); // 밀리세컨*초*분*시 = 일
}

function getAddDays(date, days) {
  const resDate = new Date(date);
  resDate.setDate(resDate.getDate() + days);

  const year = resDate.getFullYear();
  const month = ('0' + (resDate.getMonth()+1)).slice(-2);
  const day = ('0' + resDate.getDate()).slice(-2);

  return `${y}-${m}-${d}`;
}
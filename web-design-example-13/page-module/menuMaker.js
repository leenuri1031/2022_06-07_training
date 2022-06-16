function menuMaker (arr, tagName, idValue) {
  let result = '';
  arr.forEach((value, index)=>{
    result += `<${tagName}><a href="#${idValue}-${index}"> ${value}-${index}</a></${tagName}>`;
  });
  return result;
}

export default menuMaker

/* 
function menuMaker (arr, tagName, idValue) {
arr.foreach((value, index)=>{
->  value = 배열 arr(임의매개변수-나중에 대입)의 요소
->  index =배열 arr의 요소의 자리
  result += 
->  배열로 선언한 변수에 다음 내용을 반복해서 더해줄것
  `<${tagName}><a href="#${idValue}-${index}"> ${value}-${index}</a></${tagName}>`;
});
-> 반복해줄 내용(배열의 인덱스만큼) <태그이름><a href = #변수이름-인덱스(0,1,2,3...)>arr의 요소-인덱스(a태그 안에 들어갈 내용)</a></태그이름>
  return result;
  result값을 뱉어냄
}
*/
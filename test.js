
function text() {
  return `<div>hello</div>`;
}

function section() {
  return `<section>bye</section>`;
}

// console.log(text());
// console.log(section());
// ! 동기 방식

// let timer = setTimeout(() => {
//   console.log(text());
// }, 1000);
// console.log(section());
// 기다리기 전에 먼저 실행하겠다 - 효율성을 위함 - 먼저 읽혔지만 나중에 나옴
// ! 비동기 방식

let timerA = setTimeout(() => {
  console.log(text());
  let timerB = setTimeout(() => {
    console.log(section());
  }, 0);
}, 1000);






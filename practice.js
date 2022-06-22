let mundo = 100;

// work 1초 뒤에1번 행동에는 mundo가 +10이되고 콘솔에 출력이 됨
// work 1초 뒤에2번 행동에는 mundo가 -30이되고 콘솔에 출력이 됨
// todo : 총 2초간 두번의 계산을 진행

// function a(){
//   return new Promise(function(resolve,reject){
//     setTimeout(() => {
//       console.log(mundo+10);
//       resolve();
//     }, 1000);
//   })
// }

// a().then(function(data){
//   return new Promise(function(resolve,reject){
//     setTimeout(() => {
//       mundo = mundo+10;
//       console.log(mundo-30);
//     }, 1000);
//     resolve(data);
//   })
// });

function first(){
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      mundo = mundo+10;
      console.log(mundo);
      resolve();
    }, 1000);
  });
}

first()
  .then(function(data) {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        mundo = mundo-30;
        console.log(mundo);
        resolve();
      }, 1000);
    });
  })